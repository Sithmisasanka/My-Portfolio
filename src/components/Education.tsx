import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaBook, FaLaptopCode, FaServer, FaDatabase } from 'react-icons/fa';
import sliitLogo from "../assets/sliitlogo.jpg";
import schoolLogo from "../assets/school.jpg";

const educationData = [
  {
    id: 1,
    degree: "BSc (Hons) in Information Technology – Software Engineering",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    period: "2023 – Present • Current GPA: 3.36",
    description: "I am an undergraduate student at SLIIT specializing in Software Engineering. I am highly motivated to expand my skill set, embrace new challenges, and pursue industry opportunities that support my growth and career development. I have a strong passion for software development and continuously work on improving my technical and problem-solving skills.",
    icon: <FaGraduationCap className="text-2xl text-purple-400" />,
    logo: sliitLogo,
    alt: "SLIIT Logo",
    courses: [
      { name: "Software Engineering", icon: <FaLaptopCode className="text-blue-400" /> },
      { name: "Web Development", icon: <FaLaptopCode className="text-green-400" /> },
      { name: "Database Systems", icon: <FaDatabase className="text-yellow-400" /> },
      { name: "Mobile Application Development", icon: <FaServer className="text-purple-400" /> },
    ],
    achievements: [
      "Specializing in Software Engineering at SLIIT",
      "Maintaining a strong academic record with a current GPA of 3.36",
    ]
  },
  {
    id: 2,
    degree: "G.C.E. Advanced Level and G.C.E. Ordinary Level",
    institution: "H/Rajapaksa Central College – Weeraketiya",
    period: "2011 - 2021",
    description: "I completed both my G.C.E. Ordinary Level and Advanced Level examinations at H/Rajapaksa Central College. My school education played a major role in shaping my academic discipline, leadership qualities, and involvement in extracurricular activities.",
    icon: <FaSchool className="text-2xl text-blue-400" />,
    logo: schoolLogo,
    alt: "School Logo",
    courses: [
      { name: "Academic Excellence", icon: <FaBook className="text-yellow-400" /> },
      { name: "School Leadership", icon: <FaGraduationCap className="text-green-400" /> },
      { name: "Sports Participation", icon: <FaSchool className="text-red-400" /> }
    ],
    achievements: [
      "Successfully completed G.C.E. O/L and G.C.E. A/L examinations.",
      "Actively participated in school events, sports, and group activities."
    ]
  }
];

const EducationCard = ({ education }: { education: typeof educationData[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-900/10 rounded-full -mr-16 -mt-16 group-hover:bg-purple-900/20 transition-colors duration-300"></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-800 rounded-lg">
              {education.icon}
            </div>
            <div className="flex items-center gap-3">
              <img
                src={education.logo}
                alt={education.alt}
                className="w-12 h-12 object-contain rounded-md bg-white/5 p-1"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.onerror = null;
                  t.src = '/images/projects/placeholder.jpg';
                }}
              />
              <div>
                <h3 className="text-xl font-bold text-white">{education.degree}</h3>
                <p className="text-purple-400 font-medium">{education.institution}</p>
              </div>
            </div>
          </div>
          <span className="px-3 py-1 bg-purple-900/50 text-purple-300 text-sm rounded-full">
            {education.period}
          </span>
        </div>

        <p className="text-gray-300 mb-6">{education.description}</p>

        {education.courses && (
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Courses</h4>
            <div className="flex flex-wrap gap-2">
              {education.courses.map((course, index) => (
                <span key={index} className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-sm">
                  {course.icon}
                  {course.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {education.achievements && education.achievements.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Achievements</h4>
            <ul className="space-y-2">
              {education.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-400 mr-2 mt-1">•</span>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-10 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey in Information Technology and Software Engineering at SLIIT.
          </p>
        </motion.div>

        <div className="space-y-8">
          {educationData.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>

        {/* Additional Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 bg-gray-900 rounded-xl p-8 border border-gray-700"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <FaBook className="text-purple-400" />
            Additional Learning & Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Full Stack Web Development",
              "UI/UX Design Fundamentals",
              "Cloud Computing with AWS",
              "Mobile App Development with React Native",
              "Data Structures & Algorithms Masterclass",
              "DevOps & CI/CD Pipelines"
            ].map((course, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="p-1.5 bg-purple-500/10 rounded-full mt-1 group-hover:bg-purple-500/20 transition-colors">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">{course}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
