// File: src/pages/Services.jsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';



const Domains = () => {
    const Domains = [
        {
            title: 'Python Development',
            projects: [
                {
                    name: 'Smart Attendance System',
                    desc: 'Uses face recognition to automate student attendance in classrooms.'
                },
                {
                    name: 'Flask-based Blog App',
                    desc: 'A blog platform with login, CRUD posts, and search functionality.'
                }
            ]
        },
        {
            title: 'Java Development',
            projects: [
                {
                    name: 'Online Banking System',
                    desc: 'Handles account creation, balance management, and fund transfers.'
                },
                {
                    name: 'Hotel Booking System',
                    desc: 'Java Swing-based GUI for managing hotel room bookings.'
                }
            ]
        },
        {
            title: 'Flutter Development',
            projects: [
                {
                    name: 'E-Commerce App',
                    desc: 'Cross-platform mobile app with cart, login, and product listing.'
                },
                {
                    name: 'Fitness Tracker App',
                    desc: 'Track daily activities and display statistics in charts.'
                }
            ]
        },
        {
            title: 'IoT Solutions',
            projects: [
                {
                    name: 'Smart Irrigation System',
                    desc: 'Uses sensors and weather APIs to automate crop irrigation.'
                },
                {
                    name: 'Home Security System',
                    desc: 'IoT-based motion sensors integrated with cloud alerts.'
                }
            ]
        },
        {
            title: 'AI/ML Projects',
            projects: [
                {
                    name: 'Fake News Detection',
                    desc: 'ML model trained to classify news as fake or real.'
                },
                {
                    name: 'Stock Price Prediction',
                    desc: 'LSTM model that forecasts future stock values.'
                }
            ]
        },
        {
            title: 'Web Technologies',
            projects: [
                {
                    name: 'Online Portfolio Builder',
                    desc: 'React-based app where users can create and share portfolios.'
                },
                {
                    name: 'Job Portal',
                    desc: 'Full-stack platform where employers post jobs and users apply.'
                }
            ]
        },
        {
            title: 'Vision',
            projects: [
                {
                    name: 'Empowering Students',
                    desc: 'We aim to bridge academic knowledge with real-world industry experience.'
                }
            ]
        },
        {
            title: 'Locations',
            projects: [
                {
                    name: 'Operating Cities',
                    desc: 'We are currently serving in Madurai, Coimbatore, and Tiruppur.'
                }
            ]
        },
        {
            title: 'Contact',
            projects: [
                {
                    name: 'Reach Us Anytime',
                    desc: 'You can contact us through phone, email, or by visiting our offices.'
                }
            ]
        }
    ];
    return (
        <div className="pt-28 pb-20 px-6 md:px-16 bg-gradient-to-b from-blue-50 to-white min-h-screen">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Our Services & Specializations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {Domains.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 border-l-4 border-blue-500 transition-all duration-300 group"
                    >
                        <h3 className="text-xl font-semibold text-blue-700 mb-4 group-hover:text-blue-900 transition">{service.title}</h3>
                        {service.projects.map((proj, j) => (
                            <div key={j} className="flex items-start gap-3 mb-4">
                                <FaCheckCircle className="text-blue-600 mt-1" />
                                <div>
                                    <h4 className="font-medium text-gray-800">{proj.name}</h4>
                                    <p className="text-sm text-gray-600">{proj.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Domains;
