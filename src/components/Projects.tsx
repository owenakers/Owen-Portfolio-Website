import cyberbirdsImage from '/public/pictures/project-screenshots/Cyber-landing.png';
import marketMentorImage from '/public/pictures/project-screenshots/marketMentor.png';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-base text-retro-cyan dark:text-retro-cyan font-semibold tracking-wide uppercase font-mono">
            {'>'} PROJECTS.SH
          </h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-serif">
            Featured Projects
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-400 lg:mx-auto font-mono">
            <span className="text-retro-cyan">$</span> ls -la ~/projects/
          </p>
        </div>

        {/* Major Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Project 1: Cyberbirds Website */}
          <div className="group bg-gray-50 dark:bg-gray-800 p-6 rounded border-l-4 border-secondary shadow-lg hover:shadow-retro hover:-translate-y-1 transition-all duration-300" data-aos="fade-up">
            <a
              href="https://cyberbirdsjhu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded overflow-hidden mb-6 shadow-md border-2 border-gray-200 dark:border-gray-700"
            >
              <img
                src={cyberbirdsImage}
                alt="Cyberbirds Website Preview"
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-serif flex items-center gap-2">
              <i className="fas fa-shield-alt text-secondary"></i>
              Cyberbirds Website
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4 font-mono text-sm">
              Official web portal for the Johns Hopkins cybersecurity club, featuring event registration and resource access for 75+ members.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 text-xs font-medium rounded border border-blue-300 dark:border-blue-700 font-mono">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 text-xs font-medium rounded border border-red-300 dark:border-red-700 font-mono">
                HTML
              </span>
              <span className="px-3 py-1 bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-300 text-xs font-medium rounded border border-teal-300 dark:border-teal-700 font-mono">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs font-medium rounded border border-gray-400 dark:border-gray-600 font-mono">
                Google Sheets API
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://cyberbirdsjhu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded hover:from-blue-700 hover:to-teal-600 transition-all border-2 border-blue-400 dark:border-blue-600 shadow-retro-blue font-mono font-semibold"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                View Website
              </a>
              <a
                href="https://github.com/owenakers/Cyberbirds-Website.git"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-2 rounded border-2 border-gray-400 dark:border-gray-600 hover:border-retro-green hover:shadow-retro transition-all font-mono font-semibold"
              >
                <i className="fab fa-github mr-2"></i>
                View Code
              </a>
            </div>
          </div>

          {/* Project 2: Market Mentor */}
          <div className="group bg-gray-50 dark:bg-gray-800 p-6 rounded border-l-4 border-blue-600 shadow-lg hover:shadow-retro-blue hover:-translate-y-1 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <a
              href="https://market-mentor-kappa.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded overflow-hidden mb-6 shadow-md border-2 border-gray-200 dark:border-gray-700"
            >
              <img
                src={marketMentorImage}
                alt="Market Mentor App Preview"
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-serif flex items-center gap-2">
              <i className="fas fa-chart-line text-blue-600"></i>
              Market Mentor
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4 font-mono text-sm">
              An AI-powered web app that allows users to maintain a dashboard of stocks while providing real-time market analysis and personalized investment advice.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 text-xs font-medium rounded border border-green-300 dark:border-green-700 font-mono">
                Python
              </span>
              <span className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 text-xs font-medium rounded border border-indigo-300 dark:border-indigo-700 font-mono">
                Flask
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 text-xs font-medium rounded border border-yellow-300 dark:border-yellow-700 font-mono">
                React
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 text-xs font-medium rounded border border-blue-300 dark:border-blue-700 font-mono">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 text-xs font-medium rounded border border-red-300 dark:border-red-700 font-mono">
                PostgreSQL
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://market-mentor-kappa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gradient-to-r from-teal-500 to-blue-600 text-white px-6 py-2 rounded hover:from-teal-600 hover:to-blue-700 transition-all border-2 border-teal-400 dark:border-teal-600 shadow-retro font-mono font-semibold"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                View Website
              </a>
              <a
                href="https://github.com/owenakers/Market-Mentor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-2 rounded border-2 border-gray-400 dark:border-gray-600 hover:border-retro-green hover:shadow-retro transition-all font-mono font-semibold"
              >
                <i className="fab fa-github mr-2"></i>
                View Code
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Sub-header */}
        <div className="text-center my-20" data-aos="fade-up">
          <div className="h-1 w-32 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto rounded mb-6"></div>
          <h3 className="text-3xl font-bold font-serif text-gray-900 dark:text-white mb-2">
            School Work & Experiments
          </h3>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 font-mono">
            <span className="text-retro-cyan">$</span> ls ~/academic-projects/
          </p>
        </div>

        {/* Additional Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1: Weather Mood App */}
          <div className="group bg-gray-50 dark:bg-gray-800 p-6 rounded border-l-4 border-red-500 shadow-lg text-center hover:shadow-retro hover:-translate-y-1 transition-all duration-300" data-aos="zoom-in">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-300 dark:border-red-700">
              <i className="fas fa-cloud-sun text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white font-serif">Weather Mood App</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4 text-sm font-mono">
              Web app that recommends Spotify playlists based on live weather data.
            </p>
            <a
              href="https://github.com/owenakers/WeatherMoodApp.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-retro-cyan hover:text-retro-green transition-colors font-mono"
            >
              <i className="fab fa-github"></i>
              View on GitHub →
            </a>
          </div>

          {/* Project 2: Image CLI Tool */}
          <div className="group bg-gray-50 dark:bg-gray-800 p-6 rounded border-l-4 border-purple-500 shadow-lg text-center hover:shadow-retro hover:-translate-y-1 transition-all duration-300" data-aos="zoom-in" data-aos-delay="100">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-300 dark:border-purple-700">
              <i className="fas fa-camera-retro text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white font-serif">Image CLI Tool</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4 text-sm font-mono">
              A command-line tool for basic image manipulations like blur, crop, and color inversion.
            </p>
            <a
              href="https://github.com/jhu-ip/2025-spring-midterm-anath3-oakers1.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-retro-cyan hover:text-retro-green transition-colors font-mono"
            >
              <i className="fab fa-github"></i>
              View on GitHub →
            </a>
          </div>

          {/* Project 3: Chess Game */}
          <div className="group bg-gray-50 dark:bg-gray-800 p-6 rounded border-l-4 border-yellow-500 shadow-lg text-center hover:shadow-retro hover:-translate-y-1 transition-all duration-300" data-aos="zoom-in" data-aos-delay="200">
            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-300 dark:border-yellow-700">
              <i className="fas fa-chess-knight text-2xl"></i>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white font-serif">Terminal Chess</h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2 mb-4 text-sm font-mono">
              A fully functional, two-player chess game that runs in the command line.
            </p>
            <a
              href="https://github.com/jhu-ip/2025-spring-final-anath3-oakers1-alee297.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-retro-cyan hover:text-retro-green transition-colors font-mono"
            >
              <i className="fab fa-github"></i>
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
