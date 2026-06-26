import React from 'react';

export default function About() {
  return (
    <section id="about" class="py-24 px-6 md:px-12 lg:px-24 xl:px-32 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Card widgets for Focus Areas */}
          <div class="w-full lg:w-1/2 order-2 lg:order-1">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div class="p-6 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-5">
                  <i class="fa-solid fa-brain text-xl"></i>
                </div>
                <h4 class="text-lg font-bold text-slate-900 mb-2">Machine Learning</h4>
                <p class="text-sm text-slate-600 leading-relaxed">Predictive modeling, regression analysis, and decision tree architectures to solve complex logic challenges.</p>
              </div>
              
              <div class="p-6 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-5">
                  <i class="fa-solid fa-server text-xl"></i>
                </div>
                <h4 class="text-lg font-bold text-slate-900 mb-2">Backend Systems</h4>
                <p class="text-sm text-slate-600 leading-relaxed">Building clean REST APIs, routing pipelines, and robust database architectures using Flask and Node.js.</p>
              </div>

              <div class="p-6 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                  <i class="fa-solid fa-gears text-xl"></i>
                </div>
                <h4 class="text-lg font-bold text-slate-900 mb-2">Core CS Fundamentals</h4>
                <p class="text-sm text-slate-600 leading-relaxed">Deep study of complex Algorithms, data structure designs, Operating Systems, and performance metrics.</p>
              </div>

              <div class="p-6 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-5">
                  <i class="fa-solid fa-eye text-xl"></i>
                </div>
                <h4 class="text-lg font-bold text-slate-900 mb-2">Computer Vision</h4>
                <p class="text-sm text-slate-600 leading-relaxed">Developing convolutional neural networks (CNNs), image segmentation tools, and deep learning vision models.</p>
              </div>
            </div>
          </div>

          {/* Right: Narrative Profile */}
          <div class="w-full lg:w-1/2 order-1 lg:order-2">
            <span class="text-indigo-600 font-bold text-xs uppercase tracking-widest block mb-3">A Bit About Me</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-950 mb-6 tracking-tight">
              Passionate About Systems, Algorithms & AI
            </h2>
            <div class="space-y-6 text-slate-600 font-medium leading-relaxed">
              <p>
                I am currently pursuing my <span class="text-slate-950 font-semibold">Bachelor of Technology in Computer Science & Engineering</span>. Throughout my academic journey, I have cultivated a deep-seated interest in the fundamentals that power modern technology—from optimized routing algorithms and complex operating systems to distributed network protocols.
              </p>
              <p>
                My engineering philosophy revolves around building clean, optimized, and scalable architectures. Whether I am tuning network socket timers, constructing high-throughput REST APIs, or deploying statistical machine learning algorithms, my goal is to deliver software that is robust, elegant, and efficient.
              </p>
            </div>

            {/* Statistics Counter Bar */}
            <div class="flex gap-10 mt-10 pt-8 border-t border-slate-100">
              <div>
                <span class="block text-3xl font-extrabold text-slate-950">B.Tech</span>
                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">CSE Candidate</span>
              </div>
              <div class="w-[1px] bg-slate-200"></div>
              <div>
                <span class="block text-3xl font-extrabold text-slate-950">ML + FS</span>
                <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Focus Stack</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
