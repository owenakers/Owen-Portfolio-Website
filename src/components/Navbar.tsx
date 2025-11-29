import { useState } from 'react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm sticky top-0 z-50 transition-colors duration-300 border-b-2 border-retro-cyan dark:border-retro-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-retro-cyan dark:to-retro-green">
              Owen Akers
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-8 items-center">
              <a
                href="#"
                className="text-gray-500 dark:text-gray-300 hover:text-retro-cyan transition-colors duration-300 font-mono"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-500 dark:text-gray-300 hover:text-retro-cyan transition-colors duration-300 font-mono"
              >
                Journey
              </a>
              <a
                href="#projects"
                className="text-gray-500 dark:text-gray-300 hover:text-retro-cyan transition-colors duration-300 font-mono"
              >
                Projects
              </a>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-800 dark:text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-md focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden pb-4 px-4 dark:bg-gray-800/80 backdrop-blur-sm`}
      >
        <div className="flex flex-col space-y-3">
          <a
            href="#"
            onClick={closeMobileMenu}
            className="text-gray-500 dark:text-gray-300 hover:text-retro-cyan transition-colors duration-300 px-3 py-2 rounded-md font-mono"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="text-gray-500 dark:text-gray-300 hover:text-retro-cyan transition-colors duration-300 px-3 py-2 rounded-md font-mono"
          >
            Journey
          </a>
          <a
            href="#projects"
            onClick={closeMobileMenu}
            className="text-gray-500 dark:text-gray-300 hover:text-retro-cyan transition-colors duration-300 px-3 py-2 rounded-md font-mono"
          >
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
