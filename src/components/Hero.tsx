import owenImage from '/public/pictures/owen.png';
import resumePdf from '/public/assets/owen-akers-resume.pdf';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Retro scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-retro-green to-transparent animate-scanline"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-12 py-24 md:py-32 relative z-10">

        {/* Text Section */}
        <div className="md:w-1/2 lg:w-5/12 text-center md:text-left" data-aos="fade-right">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm font-semibold rounded border-2 border-retro-cyan shadow-retro-cyan font-mono">
              {'>'} Incoming Engineering Intern @ Northrop Grumman
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-white font-serif">
            <span className="block bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
              Computer Enthusiast 
            </span>
            <span className="block mt-2 text-gray-400 dark:text-gray-500 font-mono">&</span>
            <span className="block bg-gradient-to-r from-teal-500 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
              Student-Athlete
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed border-l-4 border-retro-cyan pl-4">
            <span className="font-mono text-retro-cyan dark:text-retro-cyan">$</span> Hi, I'm{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400">
              Owen Akers
            </span>
            . I'm a second-year student-athlete at Johns Hopkins University, passionate about building impactful software.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white rounded font-semibold flex items-center justify-center gap-2 border-2 border-blue-400 dark:border-blue-600 shadow-retro-blue hover:shadow-retro-cyan transition-all duration-300 font-mono"
            >
              <span>{'>'}</span> View My Work
              <i className="fas fa-terminal group-hover:scale-110 transition-transform"></i>
            </a>
            <a
              href={resumePdf}
              download="Owen-Akers-Resume.pdf"
              className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-2 border-gray-400 dark:border-teal-500 hover:border-teal-500 dark:hover:border-teal-400 rounded font-semibold flex items-center justify-center gap-2 hover:shadow-retro transition-all duration-300 font-mono"
            >
              <i className="fas fa-download"></i>
              <span>resume.pdf</span>
            </a>
          </div>

          <div className="mt-12 flex justify-center md:justify-start space-x-6">
            <a
              href="https://github.com/owenakers"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="group w-12 h-12 flex items-center justify-center rounded border-2 border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 hover:border-retro-green hover:shadow-retro transition-all duration-300"
            >
              <i className="fab fa-github text-2xl text-gray-600 dark:text-gray-400 group-hover:text-retro-green transition-colors"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/owen-akers-a384362ba"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="group w-12 h-12 flex items-center justify-center rounded border-2 border-gray-400 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 hover:border-blue-500 hover:shadow-retro-blue transition-all duration-300"
            >
              <i className="fab fa-linkedin-in text-2xl text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors"></i>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 lg:w-1/2" data-aos="fade-left">
          <div className="relative mx-auto w-fit group">
            {/* Retro CRT monitor effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

            {/* Retro frame */}
            <div className="absolute -top-6 -right-6 w-full h-full border-4 border-teal-500/30 dark:border-teal-400/30 rounded transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>

            <img
              src={owenImage}
              alt="Owen Akers"
              className="relative w-[320px] h-auto rounded shadow-2xl transform transition-all duration-500 group-hover:scale-105 mx-auto object-contain ring-4 ring-blue-500 dark:ring-teal-500 border-4 border-gray-200 dark:border-gray-700"
            />

            {/* Terminal-style caption */}
            <div className="mt-4 text-center font-mono text-sm text-gray-500 dark:text-gray-400">
              <span className="text-retro-cyan">$</span> whoami
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
