import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleEmailClick = () => {
    const subject = "Let's Connect";
    const body = `Hi Sithmi,\n\nI'd like to connect with you.\n\nBest regards,\n${email}`;
    window.location.href = `mailto:sithmisasanka2002@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const contactMethods = [
    {
      icon: <FiMail className="text-2xl text-purple-400" />,
      title: "Direct Email",
      value: "sithmisasanka2002@gmail.com",
      href: "mailto:sithmisasanka2002@gmail.com"
    },
    {
      icon: <FiMapPin className="text-2xl text-red-400" />,
      title: "Location",
      value: "Beliatta, Hambantota, Sri Lanka"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FiLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/sithmi-sasanka-964751256/",
      color: "hover:bg-blue-600"
    },
    {
      name: "GitHub",
      icon: <FiGithub className="text-xl" />,
      url: "https://github.com/Sithmisasanka",
      color: "hover:bg-gray-700"
    },
    {
      name: "Instagram",
      icon: <FiInstagram className="text-xl" />,
      url: "https://instagram.com/imsithmis",
      color: "hover:bg-pink-600"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp className="text-xl" />,
      url: "https://wa.me/+94715507024",
      color: "hover:bg-green-600"
    },
  ];

  const discussionTopics = [
    "Internship or trainee opportunities",
    "Web & mobile development",
    "UI/UX design work",
    "University or academic projects",
    "Tech collaborations"
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-10 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-2"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm open to internships, collaborations, and project discussions. Feel free to reach out anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed">
                If you'd like to work together, discuss a software project, or talk about UI/UX, I'd be happy to connect and explore how I can help.
              </p>
            </div>

            {/* What can we talk about */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h4 className="text-lg font-semibold text-white mb-4">What can we talk about?</h4>
              <ul className="space-y-2">
                {discussionTopics.map((topic, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-400">{method.title}</h4>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-white hover:text-purple-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-white">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white ${social.color} transition-colors`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Quick Email */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Send Me an Email</h3>
            <p className="text-gray-400 mb-6">
              Share your email below and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-white"
                  placeholder="you@example.com"
                />
              </div>

              <button
                onClick={handleEmailClick}
                disabled={!email}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Open Email App
              </button>
            </div>

            {/* Footer Note */}
            <p className="text-gray-500 text-sm text-center mt-6 italic">
              I usually respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}