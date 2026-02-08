const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

// Allow frontend requests
app.use(cors());

// Parse JSON body
app.use(express.json());


// Security Middleware
app.use(helmet());

// CORS Configuration
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'http://localhost:5000',
  'http://127.0.0.1:5000'
];

// Enable CORS for all routes
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', true);
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: 'Too many requests, please try again later.' }
});

// Apply rate limiting to all API routes
// Body parser middleware with increased limit
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Backend is running 🚀',
    timestamp: new Date().toISOString()
  });
});

/**
 * Sends an email using Brevo SMTP API
 * @param {Object} emailData - The email data to send
 * @returns {Promise<Object>} The response from Brevo API
 */
async function sendEmail(emailData) {
  const axiosConfig = {
    timeout: 10000, // 10 seconds timeout
    headers: {
      'api-key': process.env.BREVO_API_KEY,
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    maxBodyLength: Infinity,
    maxContentLength: Infinity,
    validateStatus: () => true // Always resolve the promise
  };

  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      emailData,
      axiosConfig
    );

    if (response.status >= 200 && response.status < 300) {
      return { success: true, data: response.data };
    }

    throw new Error(`Brevo API error: ${response.status} - ${JSON.stringify(response.data)}`);
  } catch (error) {
    console.error('Email sending failed:', {
      timestamp: new Date().toISOString(),
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
    return { success: false, error: error.message };
  }
}
console.log("Brevo key:", process.env.BREVO_API_KEY);

// Contact form endpoint
app.post('/api/contact', async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Input validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Sanitize inputs
    const sanitize = (str) => str.replace(/[<>]/g, '');
    
    // Prepare email data
    const emailData = {
      sender: {
        email: 'gotitej2005@gmail.com',
        name: "Tej's Portfolio"
      },
      to: [{
        email: 'gotitej2005@gmail.com',
        name: 'Tej Goti'
      }],
      replyTo: {
        email: sanitize(email),
        name: sanitize(name)
      },
      subject: `New message from portfolio: ${sanitize(subject).substring(0, 100)}`,
      htmlContent: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #2563eb;">New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${sanitize(name)}</p>
          <p><strong>Email:</strong> ${sanitize(email)}</p>
          <p><strong>Subject:</strong> ${sanitize(subject)}</p>
          <p><strong>Message:</strong></p>
          <div style="white-space: pre-line; background: #f3f4f6; padding: 1rem; border-radius: 0.375rem;">
            ${sanitize(message).replace(/\n/g, '<br>')}
          </div>
        </div>
      `
    };

    // Send immediate response
    res.status(202).json({
      success: true,
      message: 'Message received, thank you! We will get back to you soon.'
    });

    // Process email in background
    setTimeout(async () => {
      try {
        const result = await sendEmail(emailData);
        if (!result.success) {
          console.error('Background email sending failed:', result.error);
        }
      } catch (err) {
        console.error('Error in background email processing:', err);
      }
    }, 0);

  } catch (error) {
    console.error('Contact form error:', error);
    if (!res.headersSent) {
      res.status(500).json({
        success: false,
        message: 'An error occurred while processing your request.'
      });
    }
  }
});
app.get('/api', (req, res) => {
  res.json({ success: true, message: 'API is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Resource not found'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', {
    timestamp: new Date().toISOString(),
    path: req.path,
    method: req.method,
    error: {
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    }
  });

  if (!res.headersSent) {
    res.status(500).json({
      success: false,
      message: process.env.NODE_ENV === 'development' 
        ? err.message 
        : 'An unexpected error occurred'
    });
  }
});

// Server configuration
const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '0.0.0.0';

// Start server
const server = app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Consider whether to gracefully shut down the server here
  // process.exit(1);
});

// Handle server shutdown
const shutdown = () => {
  console.log('Shutting down server...');
  server.close(() => {
    console.log('Server has been stopped');
    process.exit(0);
  });

  // Force close server after 5 seconds
  setTimeout(() => {
    console.error('Forcing server shutdown');
    process.exit(1);
  }, 5000);
};

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);
