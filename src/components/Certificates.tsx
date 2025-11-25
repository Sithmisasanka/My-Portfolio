import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";
import { SiPython, SiAngular, SiTensorflow, SiJavascript } from "react-icons/si";

const certificates = [
  {
    id: 1,
    title: "MongoDB Java Developer Path",
    issuer: "MongoDB University",
    date: "2024",
    credentialId: "Java-MongoDB-2024",
    credentialUrl: "https://learn.mongodb.com/c/fOOIcqhESHufY7Gb3eQaFA",
    skills: ["Java", "MongoDB", "Backend"],
    description: "Completed a full learning path covering CRUD operations, schema modeling, indexing, Java drivers, and MongoDB-based backend development."
  },
  {
    id: 2,
    title: "MongoDB Node.js Developer Path",
    issuer: "MongoDB University",
    date: "2024",
    credentialId: "NodeJS-MongoDB-2024",
    credentialUrl: "https://learn.mongodb.com/c/25E3MQZEQXSAcIbvbuGWwg",
    skills: ["Node.js", "MongoDB", "Mongoose"],
    description: "Hands-on experience building Node.js applications with MongoDB, including Mongoose, schema validation, error handling, and backend API integrations."
  },
  {
    id: 3,
    title: "MongoDB Python Developer Path",
    issuer: "MongoDB University",
    date: "2024",
    credentialId: "Python-MongoDB-2024",
    credentialUrl: "https://learn.mongodb.com/c/7_Fltu6DQGCUu6USTefEfQ",
    skills: ["Python", "PyMongo", "Backend"],
    description: "Covered PyMongo fundamentals, aggregation pipeline design, indexing, and backend data processing using Python."
  },
  {
    id: 4,
    title: "Building GenAI Apps – Learning Badge Path",
    issuer: "MongoDB University",
    date: "2024",
    credentialId: "GenAI-MongoDB-2024",
    credentialUrl: "https://learn.mongodb.com/c/YAagCjI-S7ad_QQP68XsRg",
    skills: ["GenAI", "RAG", "Vector Search"],
    description: "Learned prompt engineering, vector search, embeddings, RAG pipelines, and GenAI application development using MongoDB Atlas."
  },
  {
    id: 5,
    title: "MongoDB Atlas Administrator Path",
    issuer: "MongoDB University",
    date: "2024",
    credentialId: "Atlas-Admin-2024",
    credentialUrl: "https://learn.mongodb.com/c/twRE_vnoRsa0AbI3ZcKIxA",
    skills: ["Atlas", "Cloud Admin", "DevOps"],
    description: "Covered cluster deployment, scaling, security, monitoring, automation, indexing strategies, backups, and high-availability operations in MongoDB Atlas."
  },
  {
    id: 6,
    title: "C for Beginners – Great Learning",
    issuer: "Great Learning",
    date: "2024",
    credentialId: "C-Lang-2024",
    credentialUrl: "https://olympus.mygreatlearning.com/courses/54666/certificate",
    skills: ["C Language", "Programming Basics"],
    description: "Completed fundamentals of C programming including functions, arrays, loops, pointers, and problem-solving basics."
  }
];

// Certificate icon mapping
const getCertificateIcon = (title: string) => {
  if (title.toLowerCase().includes('python')) return <SiPython className="text-3xl text-blue-400" />;
  if (title.toLowerCase().includes('angular')) return <SiAngular className="text-3xl text-red-500" />;
  if (title.toLowerCase().includes('tensorflow') || title.toLowerCase().includes('pytorch'))
    return <SiTensorflow className="text-3xl text-orange-500" />;
  if (title.toLowerCase().includes('javascript')) return <SiJavascript className="text-3xl text-yellow-400" />;
  return <FaAward className="text-2xl text-purple-400" />;
};

export default function Certificates() {

  return (
    <section id="certificates" className="relative py-24 px-6 md:px-10 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-blue-300 mb-4 tracking-wider">VALIDATION OF EXPERTISE</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mb-6">
            Certifications & Credentials
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6">
            Professional certifications and credentials that validate my expertise and commitment to continuous learning
          </p>
        </motion.div>

        <div className="space-y-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Animated Background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition duration-300"></div>

              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 bg-gradient-to-br from-blue-500 to-purple-500`}>
                      {getCertificateIcon(cert.title)}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1 text-sm">
                            <span className="text-blue-300 font-medium">{cert.issuer}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400">{cert.date}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-gray-400 text-xs">ID: {cert.credentialId}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30 transition-colors group/button"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span>View Credential</span>
                            <FaExternalLinkAlt className="text-xs group-hover/button:translate-x-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>

                      <div className="pt-4">
                        <p className="text-gray-300 text-sm mb-4">{cert.description}</p>

                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                            Skills Covered:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * i }}
                                className="inline-block px-3 py-1.5 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Border Bottom */}
                <div className="h-1 bg-gradient-to-r from-blue-500/0 via-blue-500 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">Interested in verifying my credentials or learning more?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              <span>Request Transcripts</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
            <a
              href="https://www.linkedin.com/in/sithmi-sasanka-964751256/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
            >
              <span>View on LinkedIn</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}