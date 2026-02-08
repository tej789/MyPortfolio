import React from 'react';
import { motion } from 'framer-motion';
import { UserIcon, CodeBracketIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // const stats = [
  //   { icon: BriefcaseIcon, label: 'Years Experience', value: '1+' },
  //   { icon: CodeBracketIcon, label: 'Projects Completed', value: '15+' },
  //   { icon: AcademicCapIcon, label: 'Technologies', value: '8+' },
  //   { icon: UserIcon, label: 'Happy Clients', value: '10+' },
  // ];

  return (
    <section id="about" className="section-padding section-light">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative">
              {/* Profile Image Placeholder */}
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-400 to-primary-600 dark:from-primary-500 dark:to-primary-700 rounded-full flex items-center justify-center shadow-2xl">
                <UserIcon className="w-32 h-32 text-white" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 dark:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <CodeBracketIcon className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 dark:bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <AcademicCapIcon className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
              <div className="w-20 h-1 accent-underline mb-6 mx-auto"></div>
            </div>

            <p className="text-lg text-secondary leading-relaxed">
              I'm a passionate MERN Stack Developer with a strong foundation in modern web development. 
              I love creating efficient, scalable, and user-friendly applications that solve real-world problems.
            </p>

            <p className="text-lg text-secondary leading-relaxed">
              With expertise in React, Node.js, MongoDB, and Express.js, I build full-stack applications 
              from concept to deployment. I also have experience with Java, Git, and GitHub, 
              making me versatile across different technologies and development workflows.
            </p>

            <p className="text-lg text-secondary leading-relaxed">
              I'm always eager to learn new technologies and best practices, and I enjoy collaborating 
              with teams to deliver high-quality software solutions.
            </p>

            {/* Tech Stack */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-primary mb-4">Tech Stack</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'React.js', 'Node.js', 'MongoDB', 'Express.js',
                  'Java',  'Git', 'GitHub'
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="chip hover:text-accent transition-colors duration-200 text-center"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200 dark:border-dark-700"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-500 dark:text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default About; 