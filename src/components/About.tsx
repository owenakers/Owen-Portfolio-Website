const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-base text-retro-cyan dark:text-retro-cyan font-semibold tracking-wide uppercase font-mono">
            {'>'} TIMELINE.SH
          </h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl font-serif">
            My Journey
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded"></div>
          <p className="mt-6 max-w-2xl text-xl text-gray-600 dark:text-gray-400 lg:mx-auto font-mono">
            <span className="text-retro-cyan">$</span> cat experiences.log
          </p>

          {/* Clickable hint animation */}
          <div className="mt-8 flex items-center justify-center gap-2 text-sm font-mono text-gray-500 dark:text-gray-400">
            <i className="fas fa-mouse-pointer animate-bounce text-retro-cyan"></i>
            <span className="animate-pulse">Click on experiences below to learn more</span>
            <i className="fas fa-arrow-down animate-bounce"></i>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-teal-500 to-blue-500"></div>

          {/* Timeline Items - OLDEST FIRST (reading top to bottom) */}
          <div className="space-y-12">

            {/* Item 1: Johns Hopkins - August 2024 - CLICKABLE */}
            <a href="/experiences/hopkins.html" className="relative group block" data-aos="fade-up">
              <div className="flex items-center mb-4">
                {/* Dot - Pulsing for clickable */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 shadow-retro-blue z-10 group-hover:scale-150 transition-transform duration-300"></div>

                {/* Content - Left side on desktop */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded border-l-4 md:border-l-0 md:border-r-4 border-blue-500 shadow-lg group-hover:shadow-retro-blue group-hover:-translate-y-1 transition-all duration-300 cursor-pointer relative">
                    {/* Click badge */}
                    <div className="absolute top-2 right-2 md:left-2 md:right-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-mono flex items-center gap-1">
                        <i className="fas fa-mouse-pointer"></i>
                        CLICK
                      </div>
                    </div>

                    <div className="font-mono text-xs text-blue-600 dark:text-blue-400 mb-2">
                      [2024-08-01]
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-serif flex items-center md:justify-end gap-2">
                      <i className="fas fa-university text-blue-500"></i>
                      Johns Hopkins University
                      <i className="fas fa-external-link-alt text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Started bachelor's degree while competing on the varsity tennis team, building a foundation in computer science and collaborative teamwork.
                    </p>
                    <div className="text-blue-500 font-semibold text-sm font-mono md:text-right">
                      → View Details
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Item 2: Cyberbirds - January 2025 - CLICKABLE */}
            <a href="/experiences/cyberbirds.html" className="relative group block" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                {/* Dot - Pulsing for clickable */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-secondary border-4 border-white dark:border-gray-900 shadow-retro z-10 group-hover:scale-150 transition-transform duration-300"></div>

                {/* Content - Right side on desktop */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12 md:ml-auto">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded border-l-4 border-secondary shadow-lg group-hover:shadow-retro group-hover:-translate-y-1 transition-all duration-300 cursor-pointer relative">
                    {/* Click badge */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-secondary text-white px-2 py-1 rounded text-xs font-mono flex items-center gap-1">
                        <i className="fas fa-mouse-pointer"></i>
                        CLICK
                      </div>
                    </div>

                    <div className="font-mono text-xs text-green-600 dark:text-green-400 mb-2">
                      [2025-01-01]
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-serif flex items-center gap-2">
                      <i className="fas fa-shield-alt text-secondary"></i>
                      Co-Founded Cyberbirds
                      <i className="fas fa-external-link-alt text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Took initiative to co-found and lead a cybersecurity club, building its web presence from the ground up.
                    </p>
                    <div className="text-secondary font-semibold text-sm font-mono">
                      → View Details
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Item 3: Lowe's - Summer 2025 - CLICKABLE */}
            <a href="/experiences/lowes.html" className="relative group block" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                {/* Dot - Pulsing for clickable */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 shadow-retro-blue z-10 group-hover:scale-150 transition-transform duration-300"></div>

                {/* Content - Left side on desktop */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded border-l-4 md:border-l-0 md:border-r-4 border-blue-600 shadow-lg group-hover:shadow-retro-blue group-hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    {/* Click badge */}
                    <div className="absolute top-2 right-2 md:left-2 md:right-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-mono flex items-center gap-1">
                        <i className="fas fa-mouse-pointer"></i>
                        CLICK
                      </div>
                    </div>

                    <div className="font-mono text-xs text-blue-600 dark:text-blue-400 mb-2">
                      [2025-06-01]
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-serif flex items-center md:justify-end gap-2">
                      <i className="fas fa-briefcase text-blue-600"></i>
                      Lowe's SWE Intern
                      <i className="fas fa-external-link-alt text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Contributed to an internal web application used by over 300,000 associates in an Agile environment.
                    </p>
                    <div className="text-blue-600 font-semibold text-sm font-mono md:text-right">
                      → View Details
                    </div>
                  </div>
                </div>
              </div>
            </a>

            {/* Item 4: SCAI Research Lab - September 2025 (MOST RECENT - AT BOTTOM) - CLICKABLE */}
            <a href="/experiences/scai.html" className="relative group block" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-4">
                {/* Dot - Pulsing for clickable */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-teal-500 border-4 border-white dark:border-gray-900 shadow-retro z-10 group-hover:scale-150 transition-transform duration-300"></div>

                {/* Content - Right side on desktop */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:pl-12 md:ml-auto">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded border-l-4 border-teal-500 shadow-lg group-hover:shadow-retro group-hover:-translate-y-1 transition-all duration-300 cursor-pointer relative">
                    {/* Click badge */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-teal-500 text-white px-2 py-1 rounded text-xs font-mono flex items-center gap-1">
                        <i className="fas fa-mouse-pointer"></i>
                        CLICK
                      </div>
                    </div>

                    <div className="font-mono text-xs text-teal-600 dark:text-teal-400 mb-2">
                      [2025-09-01]
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 font-serif flex items-center gap-2">
                      <i className="fas fa-flask text-teal-500"></i>
                      Joined SCAI Research Lab
                      <i className="fas fa-external-link-alt text-sm opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      Joined the SCAI research lab at Johns Hopkins, contributing to cutting-edge research in artificial intelligence and machine learning.
                    </p>
                    <div className="text-teal-500 font-semibold text-sm font-mono">
                      → View Details
                    </div>
                  </div>
                </div>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
