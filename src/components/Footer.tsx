const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-700 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400 font-serif">
              Owen Akers
            </span>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 font-mono">
              <span className="text-retro-cyan">$</span> Computer Science & Computer Engineering
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-xs mt-1 font-mono">
              <span className="text-retro-green">→</span> Johns Hopkins University
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/owenakers"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 flex items-center justify-center rounded border-2 border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 hover:border-retro-green hover:shadow-retro transition-all duration-300"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-2xl text-gray-600 dark:text-gray-400 group-hover:text-retro-green transition-colors"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/owen-akers"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 flex items-center justify-center rounded border-2 border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-900 hover:border-blue-500 hover:shadow-retro-blue transition-all duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-2xl text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-300 dark:border-gray-700 pt-6">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm font-mono">
            <span className="text-retro-cyan">©</span> {currentYear} Owen Akers <span className="text-gray-400">|</span> All rights reserved <span className="text-gray-400">|</span> Built with <span className="text-retro-cyan">React</span> + <span className="text-retro-green">Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
