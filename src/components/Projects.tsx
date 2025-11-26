import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
// Import project images
import healthcareImg from "../assets/Healthcare.png";
import aeroguardImg from "../assets/AeroGuard.png";
import beatboxImg from "../assets/BeatBox.png";
import fuelstationImg from "../assets/FuelStation.png";
import carRentalImg from "../assets/CarRental.png";
import financeTrackerImg from "../assets/FinanceTracker.png";
import myPortfolioImg from "../assets/MyPortfolio.png";


interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
}

interface Category {
  title: string;
  projects: Project[];
}

export default function Projects() {
  const allProjects: Record<string, Project> = {
    aeroguard: {
      id: 1,
      title: "AeroGuard – Smart Air Quality App",
      description: "A cross-platform mobile solution that provides real-time AQI tracking, cleaner route suggestions, personalized health alerts, and multilingual support. Built to help users reduce exposure and monitor respiratory risks with accurate global air-quality APIs.",
      tags: ["React Native", "TypeScript", "Firebase", "Google Maps API", "IQAir API"],
      image: aeroguardImg,
      githubUrl: "https://github.com/Sithmisasanka/Aero-Guard-Mobile-App"
    },
    beatbox: {
      id: 2,
      title: "BeatBox – Online Music Store System",
      description: "A Java-based desktop music platform that allows users to browse, purchase, and listen to songs. Includes artist content management and admin tools, built using robust OOP principles and JDBC database connectivity.",
      tags: ["Java", "JDBC", "MySQL", "OOP", "Desktop App"],
      image: beatboxImg,
      githubUrl: "https://github.com/Sithmisasanka/Beat-Box-Music-Store"
    },
    healthcare: {
      id: 3,
      title: "Smart Healthcare System",
      description: "A complete hospital management system with secure roles, appointment scheduling, QR-based patient identification, digital records, and optimized workflows designed for modern urban hospitals.",
      tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
      image: healthcareImg,
      githubUrl: "https://github.com/Sithmisasanka/Smart-Healthcare-System"
    },
    fuelstation: {
      id: 5,
      title: "Fuel Station Management System",
      description: "A full-stack fuel-station platform that integrates sales tracking, inventory monitoring, employee handling, and financial dashboards to streamline daily business operations.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Material-UI"],
      image: fuelstationImg,
      githubUrl: "https://github.com/Sithmisasanka/Fuel-Station-Management-System"
    },
    spendsavvy: {
      id: 6,
      title: "SpendSavvy – Finance Tracker (Android App)",
      description: "A lightweight, offline-first Android app that tracks income, expenses, and budgeting insights. Features category-based analytics, alerts, and persistent local storage using MVVM architecture.",
      tags: ["Kotlin", "MVVM", "Android Studio", "XML", "Local Storage"],
      image: financeTrackerImg,
      githubUrl: "https://github.com/Sithmisasanka/Finance-Tracker"
    },
    carrental: {
      id: 7,
      title: "Car Rental System",
      description: "A complete rental management system allowing users to browse vehicles, make bookings, track schedules, and manage accounts. Admins can monitor fleet data, customer feedback, and operational workflows.",
      tags: ["PHP", "HTML5", "CSS", "JavaScript", "MySQL"],
      image: carRentalImg,
      githubUrl: "https://github.com/Sithmisasanka/Car-Rental-System"
    },
    portfolio: {
      id: 8,
      title: "Portfolio Website – Modern React + TypeScript Portfolio",
      description: "A fast and immersive personal portfolio featuring 3D visuals, particle effects, smooth animations, dark mode, and interactive UI components. Fully responsive and optimized for performance.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Three.js"],
      image: myPortfolioImg,
      githubUrl: "https://github.com/Sithmisasanka"
    }
  };

  const categories: Category[] = [
    {
      title: "Web Development",
      projects: [
        allProjects.healthcare,
        allProjects.fuelstation,
        allProjects.carrental,
        allProjects.portfolio,
        allProjects.beatbox
      ]
    },
    {
      title: "Mobile Apps",
      projects: [
        allProjects.aeroguard,
        allProjects.spendsavvy
      ]
    },
    {
      title: "UI/UX Design",
      projects: [
        allProjects.portfolio,
        {
          ...allProjects.aeroguard,
          title: "AeroGuard (good UI app)"
        }
      ]
    }
  ];

  return (
    <section id="projects" className="relative py-24 px-6 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-pink-300 mb-4 tracking-wider">MY WORK</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-600 mb-6">
            Featured Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Categories */}
        <div className="space-y-24">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-pink-500 pl-4"
              >
                {category.title}
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.projects.map((project, index) => (
                  <motion.div
                    key={`${categoryIndex}-${project.id}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-75 blur-lg transition duration-300"></div>

                    {/* Project Card */}
                    <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 flex flex-col h-full group-hover:scale-105">
                      {/* Image Section */}
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* GitHub Button */}
                        <div>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium text-sm hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                          >
                            <FiGithub className="text-base" />
                            View on GitHub
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Sithmisasanka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
          >
            <FiGithub className="text-2xl" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}