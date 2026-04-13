import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Enter a valid email';

    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 2)
      newErrors.message = 'Message must be at least 2 characters';

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    const API_URL =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5000/api/contact"
        : "https://portfolio-backend-pgi8.onrender.com/api/contact";

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Auto-hide success message after a short delay
      setTimeout(() => setSubmitStatus(null), 4000);

    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'gotitej2005@gmail.com',
      link: 'mailto:gotitej2005@gmail.com'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '+91 8160515463',
      link: 'tel:+918160515463'
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      value: 'Gujarat, India',
      link: null
    }
  ];

  return (
    <section
      id="contact"
      className="section-padding section-light pb-48"
      style={{ position: "relative", zIndex: 1 }}
    >
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 accent-underline mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            I’m open to internships, full-time roles, freelance work, and exciting MERN projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">Contact Information</h3>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="group flex items-center space-x-4 panel p-4 rounded-2xl
                             bg-white/95 dark:bg-gray-900/95
                             text-gray-900 dark:text-gray-100
                             border border-gray-200/80 dark:border-gray-800/80
                             shadow-md hover:shadow-2xl hover:-translate-y-1.5
                             transition-all duration-300 backdrop-blur"
                >
                  <div className="icon-circle">
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-0.5">{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="text-accent hover:text-primary transition-colors duration-200">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-secondary">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/tej-goti-1470b9288"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-circle bg-white/90 dark:bg-gray-900/90 text-primary hover:bg-indigo-600 hover:text-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/tej789"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-circle bg-white/90 dark:bg-gray-900/90 text-primary hover:bg-gray-900 hover:text-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                GitHub
              </a>

              <a
                href="mailto:gotitej2005@gmail.com"
                className="icon-circle bg-white/90 dark:bg-gray-900/90 text-primary hover:bg-emerald-600 hover:text-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                Email
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={itemVariants} style={{ position: "relative", zIndex: 10 }}>
            <div className="card p-8 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/95 dark:bg-gray-900/95 text-gray-900 dark:text-gray-100 shadow-md hover:shadow-2xl transition-shadow duration-300 backdrop-blur">
              <h3 className="text-2xl font-bold text-primary mb-6">Send Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                <input name="name" value={formData.name} onChange={handleInputChange}
                  placeholder="Your Name"
                  className="form-input bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700" />

                <input name="email" value={formData.email} onChange={handleInputChange}
                  placeholder="Your Email"
                  className="form-input bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700" />

                <input name="subject" value={formData.subject} onChange={handleInputChange}
                  placeholder="Subject"
                  className="form-input bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700" />

                <textarea name="message" value={formData.message}
                  onChange={handleInputChange} rows="5"
                  placeholder="Your Message"
                  className="form-textarea bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700" />

                {submitStatus && (
                  <div
                    className={`flex items-center gap-3 p-3 rounded-lg text-sm md:text-base text-center md:text-left font-medium text-gray-900 dark:text-gray-100 shadow-sm transition-opacity duration-300
                    ${submitStatus === 'success'
                      ? 'bg-emerald-500/95 dark:bg-emerald-500/90 border border-emerald-400 text-white'
                      : 'bg-red-500/95 dark:bg-red-500/90 border border-red-400 text-white'}`}
                  >
                    <span className="inline-block w-2 h-2 rounded-full bg-white/90" />
                    <span>
                      {submitStatus === 'success'
                        ? 'Message sent successfully!'
                        : 'Failed to send. You can email me at gotitej2005@gmail.com'}
                    </span>
                  </div>
                )}

                <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
