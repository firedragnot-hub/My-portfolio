import React from 'react';

export default function Hero() {
  return (
    <section id="home" class="relative w-full min-h-screen flex flex-col lg:flex-row bg-[#E5E5E5] lg:overflow-hidden">
      {/* Diagonal Split Background (Visible only on desktop) */}
      <div class="right-dark-side absolute top-0 right-0 w-full lg:w-[60%] h-full bg-black hidden lg:block z-10"></div>
      
      {/* Left Side / Content Block */}
      <div class="relative w-full lg:w-1/2 flex items-center py-32 px-6 md:py-40 md:px-16 lg:px-24 xl:px-32 z-20">
        <div class="max-w-xl">
          <h3 class="text-xl md:text-2xl font-bold text-slate-800 tracking-wide mb-3 flex items-center gap-2">
            Hi, I am <span class="w-8 h-[2px] bg-indigo-600"></span>
          </h3>
          <h1 class="text-5xl md:text-7xl font-extrabold text-slate-950 leading-tight mb-4 tracking-tighter">
            Aman Singh
          </h1>
          <h2 class="text-xl md:text-2xl font-bold text-indigo-600 mb-4 leading-snug">
            Building Intelligent Software Solutions
          </h2>
          <p class="text-base md:text-lg text-slate-600 font-medium mb-10 leading-relaxed max-w-lg">
            Computer Science & Engineering Student <br class="hidden sm:inline" />
            <span class="text-slate-400">|</span> Aspiring Full-Stack & ML Engineer
          </p>
          
          {/* Call To Actions */}
          <div class="flex flex-wrap gap-4 mb-12">
            <a href="#projects" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-indigo-500/20 transform hover:-translate-y-0.5 transition-all duration-300">
              Explore Projects
            </a>
            <a href="#about" class="border-2 border-slate-950 hover:bg-slate-950 hover:text-white text-slate-950 font-bold px-8 py-4 rounded-lg transform hover:-translate-y-0.5 transition-all duration-300">
              More About Me
            </a>
          </div>

          {/* Social Icons */}
          <div class="flex gap-4">
            <a href="mailto:amansingha3639@gmail.com" class="group flex items-center justify-center w-12 h-12 bg-white text-slate-800 rounded-lg shadow-sm border border-slate-200 hover:bg-indigo-600 hover:text-white hover:border-transparent transform hover:-translate-y-1 transition-all duration-300" aria-label="Email">
              <i class="fa-solid fa-envelope text-lg transition-transform group-hover:scale-110"></i>
            </a>
            <a href="https://github.com/firedragnot-hub" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center w-12 h-12 bg-white text-slate-800 rounded-lg shadow-sm border border-slate-200 hover:bg-indigo-600 hover:text-white hover:border-transparent transform hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
              <i class="fa-brands fa-github text-lg transition-transform group-hover:scale-110"></i>
            </a>
            <a href="https://www.linkedin.com/in/aman-singh-213910294/" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center w-12 h-12 bg-white text-slate-800 rounded-lg shadow-sm border border-slate-200 hover:bg-indigo-600 hover:text-white hover:border-transparent transform hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
              <i class="fa-brands fa-linkedin-in text-lg transition-transform group-hover:scale-110"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Right Side Image Container (Desktop / Large Screens) */}
      <div class="image-container absolute bottom-0 right-[5%] lg:right-[10%] h-[70%] lg:h-[85%] z-20 hidden lg:block">
        <img src="assets/images/hero.png" alt="Aman Singh Portrait" class="h-full object-contain block" />
      </div>

      {/* Mobile/Tablet View Image (Visible only on screens < lg) */}
      <div class="w-full bg-black flex items-center justify-center py-16 px-6 lg:hidden z-20">
        <div class="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-indigo-600 shadow-2xl">
          <img src="assets/images/hero.png" alt="Aman Singh Portrait" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
