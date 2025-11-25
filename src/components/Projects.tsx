import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
// Import project images
import healthcareImg from "../assets/Healthcare.png";
import aeroguardImg from "../assets/AeroGuard.png";
import beatboxImg from "../assets/BeatBox.png";
import fuelstationImg from "../assets/FuelStation.png";
import carRentalImg from "../assets/CarRental.png";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Smart Healthcare System",
      description: "A full-stack hospital management system designed to digitalize patient–doctor interactions. Includes secure multi-role access, appointment scheduling, medical record handling, and QR-based patient identification for faster processing.",
      tags: ["Next.js", "MongoDB", "Tailwind CSS", "QR Code"],
      image: healthcareImg,
      githubUrl: "https://github.com/Sithmisasanka/Smart-Healthcare-System"
    },
    {
      id: 2,
      title: "AeroGuard – Air Quality Monitoring App",
      description: "A mobile air-quality monitoring app that provides real-time pollution readings, exposure tracking, and health recommendations based on environmental data. Built with a focus on user clarity and mobile responsiveness.",
      tags: ["React Native", "Firebase", "Arduino", "IoT Sensors"],
      image: aeroguardImg,
      githubUrl: "https://github.com/Sithmisasanka/Aero-Guard-Mobile-App"
    },
    {
      id: 3,
      title: "BeatBox – Music Player App",
      description: "An Android music player with playlist management, smooth navigation, and a modern UI. Designed to deliver an immersive audio experience with fast performance on mobile devices.",
      tags: ["Kotlin", "Android Studio", "Firebase", "UI/UX"],
      image: beatboxImg,
      githubUrl: "https://github.com/Sithmisasanka/Beat-Box-Music-Store"
    },
    {
      id: 4,
      title: "Fuel Station Management System",
      description: "A comprehensive management platform for fuel stations covering inventory tracking, sales monitoring, employee management, and reporting dashboards for efficient daily operations.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      image: fuelstationImg,
      githubUrl: "https://github.com/Sithmisasanka/Fuel-Station-Management-System"
    },
    {
      id: 5,
      title: "Car Rental System",
      description: "The Car Rental System streamlines the entire vehicle rental process. Users can explore available vehicles, check availability, and place bookings, while administrators can manage the fleet, update vehicle information, track customer data, and oversee rental operations. The system is designed for efficiency, clarity, and smooth interaction between customers and staff.",
      tags: ["React", "Node.js", "MongoDB", "REST API"],
      image: carRentalImg,
      githubUrl: "https://github.com/Sithmisasanka/Car-Rental-System"
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

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-75 blur-lg transition duration-300"></div>

              {/* Project Card */}
              <div className={`relative bg-gray-800/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}>
                {/* Image Section */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="relative h-64 lg:h-full min-h-[300px]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                  {/* Title */}
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 text-sm font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20 hover:bg-purple-500/20 transition-colors"
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
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
                    >
                      <FiGithub className="text-lg" />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
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