const Skills = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skills */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 font-serif flex items-center gap-2">
              <i className="fas fa-code text-retro-cyan"></i>
              Technical Skills
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-6">
              <span className="text-retro-cyan">$</span> cat /etc/skills.conf
            </p>
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded border-l-4 border-blue-500 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 font-mono flex items-center gap-2">
                  <i className="fas fa-terminal text-blue-500"></i>
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 border border-blue-300 dark:border-blue-700 font-mono">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 border border-yellow-300 dark:border-yellow-700 font-mono">
                    Python
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 border border-red-300 dark:border-red-700 font-mono">
                    Java
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 border border-purple-300 dark:border-purple-700 font-mono">
                    C
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 border border-green-300 dark:border-green-700 font-mono">
                    C++
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300 border border-orange-300 dark:border-orange-700 font-mono">
                    HTML/CSS
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border border-gray-400 dark:border-gray-600 font-mono">
                    SQL
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700 font-mono">
                    TypeScript
                  </span>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded border-l-4 border-teal-500 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 font-mono flex items-center gap-2">
                  <i className="fas fa-toolbox text-teal-500"></i>
                  Frameworks & Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 border border-green-300 dark:border-green-700 font-mono">
                    React/React Native
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 border border-gray-400 dark:border-gray-600 font-mono">
                    Git
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 border border-teal-300 dark:border-teal-700 font-mono">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 border border-red-300 dark:border-red-700 font-mono">
                    Linux
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-700 font-mono">
                    Flask
                  </span>
                  <span className="px-3 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 border border-blue-300 dark:border-blue-700 font-mono">
                    Docker
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Download */}
          <div data-aos="fade-left" className="flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 font-serif flex items-center gap-2">
              <i className="fas fa-file-alt text-retro-cyan"></i>
              Credentials
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mb-6">
              <span className="text-retro-cyan">$</span> wget resume.pdf
            </p>
            <div className="bg-white dark:bg-gray-900 rounded border-l-4 border-secondary p-8 shadow-lg flex-1 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 font-serif flex items-center gap-2">
                <i className="fas fa-download text-secondary"></i>
                Download My Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-mono text-sm">
                For a comprehensive overview of my education, experience, and skills, please download my resume.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/assets/owen-akers-resume.pdf"
                  download
                  className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-6 rounded text-center hover:from-blue-700 hover:to-teal-600 transition-all border-2 border-blue-400 dark:border-blue-600 shadow-retro-blue font-mono font-semibold flex items-center justify-center gap-2"
                >
                  <i className="fas fa-file-pdf"></i>
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/owen-akers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-white py-3 px-6 rounded text-center border-2 border-gray-400 dark:border-gray-600 hover:border-retro-green hover:shadow-retro transition-all font-mono font-semibold flex items-center justify-center gap-2"
                >
                  <i className="fab fa-linkedin"></i>
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
