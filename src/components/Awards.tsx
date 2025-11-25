import { motion } from "framer-motion";
import { FaTrophy, FaMedal } from "react-icons/fa";

export default function Awards() {
  const awards = [
    {
      id: 1,
      title: "Analytical Problem Solver",
      issuer: "Logical Thinking • Smart Decisions",
      date: "Core Strength",
      description: "I break down complex problems into clear steps and find practical, effective solutions. I enjoy understanding system behavior, fixing issues, and improving the overall flow of any project I work on.",
      icon: <FaTrophy className="text-yellow-400 text-2xl" />,
      category: "Logical Mindset",
      tags: ["Logical Mindset", "Solution-Oriented"]
    },
    {
      id: 2,
      title: "Collaborative Team Player",
      issuer: "Clear Communication • Reliable Presence",
      date: "Core Strength",
      description: "I work well in team environments and communicate clearly, making sure tasks move smoothly. I support my teammates, stay open to feedback, and help maintain a positive workflow.",
      icon: <FaMedal className="text-blue-400 text-2xl" />,
      category: "Strong Communication",
      tags: ["Strong Communication", "Team Alignment"]
    },
    {
      id: 3,
      title: "Fast & Continuous Learner",
      issuer: "Always Improving • Growth Mindset",
      date: "Core Strength",
      description: "I adapt quickly, pick up new technologies fast, and enjoy learning through hands-on practice. I constantly seek opportunities to enhance my technical and design skills.",
      icon: <FaTrophy className="text-purple-400 text-2xl" />,
      category: "Growth Mindset",
      tags: ["Growth Mindset", "Quick Adaptation"]
    },
    {
      id: 4,
      title: "Detail-Driven Problem Solver",
      issuer: "Sharp Focus • Accurate Delivery",
      date: "Core Strength",
      description: "I pay close attention to details that others overlook. From layout alignment to code structure, I ensure everything feels refined, stable, and professionally crafted.",
      icon: <FaTrophy className="text-green-400 text-2xl" />,
      category: "High Accuracy",
      tags: ["High Accuracy", "Refined Work", "Zero-Noise Output"]
    }
  ];

  return (
    <section id="awards" className="relative py-24 px-6 md:px-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-purple-300 mb-4 tracking-wider">WHAT I BRING</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mb-6">
            My Strengths
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Key strengths and qualities that drive my work and continuous growth as a software engineer
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-300"></div>

              {/* Card Content */}
              <div className="relative h-full bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                {/* Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gray-900/50 rounded-xl">
                    {award.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">{award.title}</h3>
                    <p className="text-purple-300 text-sm font-medium">{award.issuer}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {award.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {award.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 text-xs font-medium bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                    >
                      {tag}
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
