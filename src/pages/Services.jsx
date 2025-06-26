import React from 'react';
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBook,
  FaLightbulb,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaCode,
  FaMicrochip,
  FaArrowRight,
} from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';

const Services = () => {
  const Services = [
    {
      icon: <FaGraduationCap className="text-4xl text-blue-600" />,
      title: 'Final Year Projects',
      description:
        'Complete academic project guidance for B.E/B.Tech, MCA, M.Sc, M.E students with project abstracts, documentation, code execution, and Viva support.',
      projects: [
        {
          name: 'AI-based Face Recognition Attendance System',
          intro: 'Automates attendance using facial recognition with OpenCV and Python.'
        },
        {
          name: 'Smart Vehicle Accident Detection using IoT',
          intro: 'Detects road accidents and sends emergency alerts using sensors and GPS.'
        },
        {
          name: 'College Enquiry Chatbot using NLP',
          intro: 'Handles student queries using Natural Language Processing in Python.'
        }
      ]
    },
    {
      icon: <FaLaptopCode className="text-4xl text-blue-600" />,
      title: 'Mini Projects',
      description:
        'Small-scale, hands-on projects to boost coding confidence, improve logic-building, and enhance resumes with practical exposure in trending technologies.',
      projects: [
        {
          name: 'To-Do List App in React',
          intro: 'A simple React app to manage and track daily tasks.'
        },
        {
          name: 'Library Management System in Java',
          intro: 'Manages book inventory and issue/return operations for libraries.'
        },
        {
          name: 'BMI Calculator using Python & Tkinter',
          intro: 'Desktop app to calculate BMI based on user input.'
        }
      ]
    },
    {
      icon: <FaBook className="text-4xl text-blue-600" />,
      title: 'IEEE Project Support',
      description:
        'Support for IEEE-based papers with latest concepts, simulation/code development, plagiarism-free report writing, and conference submission guidance.',
      projects: [
        {
          name: 'Energy-efficient Routing in Wireless Sensor Networks',
          intro: 'Improves data transfer efficiency in sensor networks.'
        },
        {
          name: 'Blockchain-based Secure Voting System',
          intro: 'Implements secure, tamper-proof voting with blockchain.'
        },
        {
          name: 'AI-driven Traffic Signal Control using RL',
          intro: 'Uses AI to optimize traffic signal timings and reduce congestion.'
        }
      ]
    },
    {
      icon: <FaLightbulb className="text-4xl text-blue-600" />,
      title: 'Research Paper Writing',
      description:
        'Assistance in selecting topics, writing, formatting, and submitting papers to international/national journals with plagiarism checks and Scopus indexing support.',
      projects: [
        {
          name: 'Survey on Deep Learning for Medical Imaging',
          intro: 'A detailed review of DL techniques used in diagnosis.'
        },
        {
          name: 'Comparative Study of Machine Learning Algorithms',
          intro: 'Analytical comparison of popular ML models.'
        },
        {
          name: 'Secure Data Transmission Techniques in IoT',
          intro: 'Explores encryption and secure communication for IoT.'
        }
      ]
    },
    {
      icon: <FaCode className="text-4xl text-blue-600" />,
      title: 'Code Development',
      description:
        'Robust, industry-level code development services in Python, Java, MERN, and Flutter for academic and freelance projects including UI/UX and backend logic.',
      projects: [
        {
          name: 'E-Commerce Backend with Node.js & MongoDB',
          intro: 'REST API with authentication and cart/order management.'
        },
        {
          name: 'Job Portal using React and Firebase',
          intro: 'Real-time job posting and application system with auth.'
        },
        {
          name: 'Student Result Management System in Java',
          intro: 'Desktop app to record and generate student results.'
        }
      ]
    },
    {
      icon: <FaMicrochip className="text-4xl text-blue-600" />,
      title: 'Arduino/IoT/AI/ML',
      description:
        'Innovative project development in IoT using Arduino, NodeMCU, AI/ML algorithms with sensor integration and real-time data analysis features.',
      projects: [
        {
          name: 'Smart Water Level Monitoring System',
          intro: 'Monitors tank water level and sends alerts when low/high.'
        },
        {
          name: 'Home Automation using NodeMCU and Blynk',
          intro: 'IoT-based system to control home appliances remotely.'
        },
        {
          name: 'AI-based Crop Disease Prediction using CNN',
          intro: 'Detects plant diseases using image classification.'
        }
      ]
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-blue-600" />,
      title: 'Online Mentorship',
      description:
        'Live 1-on-1 mentorship for concepts, bug-fixing, Git usage, interview prep, and personalized project development planning via Zoom/Meet.',
      projects: [
        {
          name: 'GitHub Portfolio Setup & Deployment',
          intro: 'Helps students build and publish their dev portfolios.'
        },
        {
          name: 'Bug Fixing in MERN Stack Applications',
          intro: 'Troubleshoots common frontend/backend issues in real time.'
        },
        {
          name: 'Mock Interview + Resume Feedback Sessions',
          intro: 'Guided practice sessions with constructive feedback.'
        }
      ]
    },
    {
      icon: <FaProjectDiagram className="text-4xl text-blue-600" />,
      title: 'Website/App Development',
      description:
        'Professional frontend/backend design for websites and mobile apps using React, Node.js, Flutter, Firebase, APIs, and SEO-optimized deployment.',
      projects: [
        {
          name: 'Food Delivery App in React + Context API',
          intro: 'A full-stack food ordering solution with cart and orders.'
        },
        {
          name: 'College Website with Admin Dashboard',
          intro: 'Informational site with CMS and admin login.'
        },
        {
          name: 'Flutter Mobile App for Booking Appointments',
          intro: 'Cross-platform app to book and manage appointments.'
        }
      ]
    },
  ];

return (
  <div className="max-w-7xl mx-auto px-4 py-16">
    <motion.h2
      className="text-4xl font-bold text-center text-gray-800 mb-16 underline decoration-blue-600"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Explore Our Project Services
    </motion.h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12">
      {Services.map((domain, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.div
            className="flex items-center gap-4 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            {domain.icon}
            <h3 className="text-2xl font-semibold text-gray-800">{domain.title}</h3>
          </motion.div>

          <motion.p
            className="text-gray-600 text-sm mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            {domain.description}
          </motion.p>

          <motion.h4
            className="text-blue-600 font-semibold mb-2"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            Sample Projects:
          </motion.h4>

          <motion.ul
            className="text-gray-700 text-sm space-y-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            {domain.projects.map((project, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                viewport={{ once: false }}
              >
                <FaArrowRight className="text-blue-500 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">{project.name}</p>
                  <p className="text-xs text-gray-500">{project.intro}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      ))}
    </div>
  </div>
);

};

export default Services;