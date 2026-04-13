import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: '⚛️', color: 'bg-dusk_blue-500 text-white dark:bg-dusk_blue-400 dark:text-platinum-50' },
        { name: 'JavaScript', icon: '🟨', color: 'bg-steel_blue-500 text-white dark:bg-steel_blue-400 dark:text-platinum-50' },
        { name: 'HTML5', icon: '🌐', color: 'bg-platinum-100 text-dusk_blue-900 dark:bg-platinum-700 dark:text-dusk_blue-100' },
        { name: 'CSS3', icon: '🎨', color: 'bg-icy_blue-200 text-dusk_blue-900 dark:bg-icy_blue-700 dark:text-platinum-50' },
        { name: 'Tailwind CSS', icon: '💨', color: 'bg-dusk_blue-300 text-dusk_blue-900 dark:bg-dusk_blue-600 dark:text-platinum-50' },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: '🟢', color: 'bg-dusk_blue-500 text-white dark:bg-dusk_blue-400 dark:text-platinum-50' },
        { name: 'Express.js', icon: '🚂', color: 'bg-platinum-100 text-dusk_blue-900 dark:bg-platinum-700 dark:text-dusk_blue-100' },
        { name: 'Java', icon: '☕', color: 'bg-steel_blue-600 text-white dark:bg-steel_blue-400 dark:text-platinum-50' },
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: '🍃', color: 'bg-dusk_blue-500 text-white dark:bg-dusk_blue-400 dark:text-platinum-50' },
        { name: 'Git', icon: '📝', color: 'bg-platinum-200 text-dusk_blue-900 dark:bg-platinum-700 dark:text-dusk_blue-100' },
        { name: 'GitHub', icon: '🐙', color: 'bg-platinum-100 text-dusk_blue-900 dark:bg-platinum-700 dark:text-dusk_blue-100' },
        { name: 'VS Code', icon: '💻', color: 'bg-steel_blue-300 text-dusk_blue-900 dark:bg-steel_blue-700 dark:text-platinum-50' },
      ]
    },
    {
      title: 'Additional Skills',
      skills: [
        { name: 'REST APIs', icon: '🔗', color: 'bg-steel_blue-400 text-white dark:bg-steel_blue-300 dark:text-platinum-50' },
        { name: 'JSON', icon: '📄', color: 'bg-dusk_blue-600 text-white dark:bg-dusk_blue-400 dark:text-platinum-50' },
       
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding section-gray">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-dusk_blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            I work with a variety of technologies to create robust and scalable web applications.
            Here are the tools and technologies I use in my development workflow.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="group h-full rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/95 dark:bg-gray-900/95 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 p-6 backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-primary mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.02 }}
                          className={`skill-pill ${skill.color} transition-all duration-300 shadow-sm hover:shadow-md`}
                        >
                          <span className="text-xl">{skill.icon}</span>
                          <span className="font-medium text-sm md:text-base">{skill.name}</span>
                        </motion.div>
                      ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Level Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 bg-white/95 dark:bg-gray-900/95 shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 md:p-8 backdrop-blur"
        >
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Proficiency Levels</h3>
          <p className="text-sm text-secondary text-center mb-8 max-w-2xl mx-auto">
            A visual snapshot of the technologies I use most frequently and feel most confident working with day to day.
          </p>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              { skill: 'React.js', level: 90 },
              { skill: 'Node.js', level: 85 },
              { skill: 'MongoDB', level: 80 },
              { skill: 'JavaScript', level: 95 },
              { skill: 'Java', level: 90 },
              { skill: 'Python', level: 70 },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-secondary">{item.skill}</span>
                  <span className="text-xs md:text-sm text-secondary font-medium">{item.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-200/80 dark:bg-gray-800/90 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-2 rounded-full bg-indigo-600 dark:bg-indigo-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 