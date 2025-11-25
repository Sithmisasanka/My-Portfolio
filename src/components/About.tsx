import { motion } from "framer-motion";
import { FaCode, FaMobile, FaPalette, FaDatabase, FaUsers, FaLightbulb } from "react-icons/fa";

export default function About() {
  const expertiseAreas = [
    {
      icon: <FaCode className="text-4xl" />,
      title: "Web Development",
      description: "I build responsive web applications using HTML, CSS, JavaScript and modern libraries like React, focusing on clean layouts and good user experience.",
      badges: ["Responsive UI", "Modern Frontend", "Clean Code"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <FaMobile className="text-4xl" />,
      title: "Mobile & Cross-Platform Apps",
      description: "I work with frameworks like Flutter and React Native to create mobile experiences that feel smooth on both Android and iOS.",
      badges: ["Cross-Platform", "Native-Like Feel", "User-Friendly"],
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <FaPalette className="text-4xl" />,
      title: "UI/UX & Prototyping",
      description: "I design intuitive interfaces, plan user flows, and prototype ideas using tools such as Figma and Canva to make products easy and pleasant to use.",
      badges: ["User-Centered", "Wireframes & Flows", "Visual Design"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Product Design & Branding",
      description: "With experience as a Product Design Manager, I help shape brands, design visuals and support marketing content that matches the product's identity.",
      badges: ["Brand Identity", "Visual Assets", "SEO-Friendly Content"],
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: <FaDatabase className="text-4xl" />,
      title: "Full-Stack & Databases",
      description: "I have hands-on experience working with ME(R)N-style stacks and databases like MongoDB and MySQL for building data-driven applications.",
      badges: ["REST APIs", "MongoDB & MySQL", "Data-Driven Apps"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Teamwork & Continuous Learning",
      description: "I enjoy working in project teams, taking responsibility, and continuously improving my technical and design skills through academic and personal projects.",
      badges: ["Collaborative", "Fast Learner", "Problem Solver"],
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <section id="about" className="relative py-20 px-6 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium text-purple-300 mb-4 tracking-wider">MY EXPERTISE</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mb-6">
            What I Do
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Expertise Cards - 3x2 Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full"
            >
              {/* Animated Background Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${area.color} rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-300`}></div>

              {/* Card Content */}
              <div className="relative h-full bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 flex items-center justify-center rounded-xl mb-4 bg-gradient-to-br ${area.color} text-white`}>
                  {area.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">{area.title}</h3>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 flex-grow leading-relaxed">
                  {area.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {area.badges.map((badge, badgeIndex) => (
                    <span
                      key={badgeIndex}
                      className="px-3 py-1 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
