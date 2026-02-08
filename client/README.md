# MERN Stack Developer Portfolio

A modern, responsive portfolio website built with React.js and Tailwind CSS. This portfolio showcases your skills, projects, and professional experience as a MERN Stack Developer with **Dark/Light Mode Toggle** functionality.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Sections**: Hero, About, Skills, Projects, Education, and Contact
- **Project Filtering**: Filter projects by technology stack (MERN, React, Java, Python)
- **Contact Form**: Functional contact form with email integration
- **Smooth Scrolling**: Seamless navigation between sections
- **Animations**: Beautiful animations using Framer Motion
- **SEO Optimized**: Meta tags and structured content
- **Resume Download**: Direct download functionality for your resume

## 🎨 Theme & Color Scheme

### Light Mode
- **Background**: #f5f5f5 (gray-50)
- **Text**: #333333 (gray-900)
- **Accent**: #3B82F6 (blue-500)

### Dark Mode
- **Background**: #111827 (dark-900)
- **Text**: #F9FAFB (dark-50)
- **Accent**: #60A5FA (blue-400)

### Features
- Smooth transitions between modes
- Persistent theme preference (saved in localStorage)
- Modern fonts: Inter, Poppins, Roboto
- Consistent color scheme across all components

## 🛠️ Technologies Used

- **Frontend**: React.js 19.1.0
- **Styling**: Tailwind CSS with Dark Mode
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Email Service**: EmailJS (for contact form)
- **Theme Management**: React Context API

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization Guide

### 1. Personal Information

Update the following files with your personal information:

#### Hero Section (`src/components/Hero.js`)
```javascript
// Line 47: Update your name
<span className="text-primary-500 dark:text-primary-400">Pujan Desai</span>

// Line 52: Update your title
MERN Stack Developer

// Line 57-60: Update your description
Passionate full-stack developer specializing in modern web technologies. 
I create scalable, user-friendly applications with clean code and innovative solutions.
```

#### Contact Section (`src/components/Contact.js`)
```javascript
// Update contact information in lines 65-75
{
  icon: EnvelopeIcon,
  title: 'Email',
  value: 'pujandesai450@gmail.com', // Update this
  link: 'mailto:pujandesai450@gmail.com' // Update this
}
```

#### Footer (`src/components/Footer.js`)
```javascript
// Update social links in lines 25-45
// Update contact info in lines 70-90
```

### 2. Projects

Update the projects array in `src/components/Projects.js`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    image: '🛒', // You can use emojis or replace with actual images
    category: 'mern', // 'mern', 'react', 'java', 'python'
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/yourusername/project-name',
    live: 'https://your-project.vercel.app',
    featured: true
  },
  // Add more projects...
];
```

### 3. Resume Download

1. **Add your resume file** to the `public` folder
2. **Update the file name** in `src/components/Hero.js`:
```javascript
const resumeUrl = '/your-resume.pdf'; // Update this
link.download = 'Your_Name_Resume.pdf'; // Update this
```

### 4. Theme Customization

The theme colors can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... customize your primary colors
  },
  dark: {
    50: '#f9fafb',
    100: '#f3f4f6',
    // ... customize your dark mode colors
  }
}
```

## 📧 EmailJS Integration

To enable the contact form functionality:

1. **Sign up for EmailJS**
   - Go to [EmailJS](https://www.emailjs.com/)
   - Create a free account

2. **Create an Email Service**
   - Add your Gmail account
   - Create an email template

3. **Get your credentials**
   - Service ID
   - Template ID
   - Public Key

4. **Install EmailJS**
   ```bash
   npm install @emailjs/browser
   ```

5. **Update Contact Component**
   Replace the simulated email sending in `src/components/Contact.js`:

```javascript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    const result = await emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your service ID
      'YOUR_TEMPLATE_ID', // Replace with your template ID
      formRef.current,
      'YOUR_PUBLIC_KEY' // Replace with your public key
    );
    
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🌙 Dark Mode Features

### Theme Toggle
- **Location**: Top navigation bar (desktop and mobile)
- **Icons**: Sun icon for light mode, moon icon for dark mode
- **Persistence**: Theme preference is saved in localStorage
- **Smooth Transitions**: All color changes are animated

### Dark Mode Styling
- **Backgrounds**: Dark backgrounds with proper contrast
- **Text**: Light text colors for readability
- **Cards**: Dark card backgrounds with subtle borders
- **Forms**: Dark form inputs with proper focus states
- **Buttons**: Consistent button styling in both themes

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `build` folder to Netlify
   - Or connect your GitHub repository

### GitHub Pages

1. **Add homepage to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name"
   }
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
src/
├── context/
│   └── ThemeContext.js     # Dark/Light mode context
├── components/
│   ├── Hero.js             # Hero section with CTA and resume download
│   ├── About.js            # About section with bio and stats
│   ├── Skills.js           # Skills grid with categories
│   ├── Projects.js         # Project showcase with filtering
│   ├── Education.js        # Education timeline
│   ├── Contact.js          # Contact form and information
│   ├── Footer.js           # Footer with social links
│   └── Navbar.js           # Navigation with theme toggle
├── App.js                  # Main app component with theme provider
├── index.js                # App entry point
└── index.css               # Global styles and Tailwind imports
```

## 🎯 Key Features Explained

### Dark/Light Mode Toggle
- **Context Provider**: Manages theme state across the app
- **Local Storage**: Persists user preference
- **Smooth Transitions**: CSS transitions for color changes
- **Accessibility**: Proper contrast ratios in both themes

### Smooth Scrolling Navigation
- Fixed navigation bar with active section highlighting
- Smooth scrolling between sections
- Mobile-responsive hamburger menu
- Theme toggle button in navigation

### Project Filtering
- Filter projects by technology stack
- Animated transitions between filtered results
- Featured project highlighting
- Responsive grid layout

### Contact Form
- Form validation
- Loading states
- Success/error feedback
- EmailJS integration ready
- Dark mode compatible styling

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Consistent spacing across devices

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with customization, feel free to reach out!

---

**Built with ❤️ using React & Tailwind CSS** 