import React from 'react';

export default function Projects() {
  return (
    <section id="projects" class="py-24 px-6 md:px-12 lg:px-24 xl:px-32 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-indigo-600 font-bold text-xs uppercase tracking-widest block mb-3">Portfolio</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">Featured Work</h2>
          <p class="text-slate-600 font-medium">A selection of recent applications, research implementations, and backend architectures I have built.</p>
        </div>

        {/* Projects Card Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1: Insurance */}
          <a
            href="https://insurance-premium-calculation.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 block no-underline"
          >
            {/* Top Accent Line */}
            <div class="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 w-full"></div>
            <div class="p-8 flex-grow">
              {/* Category/Icon */}
              <div class="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
                <i class="fa-solid fa-shield-halved text-base"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-950 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                Insurance Premium Prediction
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">
                A machine learning application designed to predict insurance premium costs based on health risk factors, habits, and demographics using regression analysis.
              </p>
            </div>
            {/* Bottom tags and action */}
            <div class="px-8 pb-8">
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="bg-indigo-50 text-indigo-700 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">Flask</span>
                <span class="bg-slate-200 text-slate-700 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">Python</span>
                <span class="bg-emerald-50 text-emerald-700 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">Machine Learning</span>
                <span class="bg-purple-50 text-purple-700 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">Predictive Analytics</span>
              </div>
              <div class="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-slate-950 uppercase group-hover:text-indigo-600 transition-colors">
                View Project
                <i class="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </a>

          {/* Project 2: Dynamic Pricing */}
          <a
            href="https://teglretail.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 block no-underline"
          >
            {/* Top Accent Line */}
            <div class="h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 w-full"></div>
            <div class="p-8 flex-grow">
              {/* Category/Icon */}
              <div class="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <i class="fa-solid fa-brain text-base"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-950 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
                AI-Based Dynamic Pricing System
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">
                A real-time predictive pricing engine that processes competitor prices, market demand, and inventory levels to dynamically adjust prices using reinforcement learning and decision tree models.
              </p>
            </div>
            {/* Bottom tags and action */}
            <div class="px-8 pb-8">
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="bg-emerald-50 text-emerald-700 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">Python</span>
                <span class="bg-blue-50 text-blue-700 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">FastAPI</span>
                <span class="bg-purple-50 text-purple-700 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">Machine Learning</span>
                <span class="bg-yellow-50 text-yellow-700 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">Scikit-Learn</span>
              </div>
              <div class="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-slate-950 uppercase group-hover:text-emerald-600 transition-colors">
                View Project 
                <i class="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </a>

          {/* Project 3: Structural Defect */}
          <a
            href="https://struct-scan-ai-qxyb.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-slate-50 border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 block no-underline"
          >
            {/* Top Accent Line */}
            <div class="h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 w-full"></div>
            <div class="p-8 flex-grow">
              {/* Category/Icon */}
              <div class="w-10 h-10 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6">
                <i class="fa-solid fa-eye text-base"></i>
              </div>
              <h3 class="text-xl font-bold text-slate-950 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                Structural Defect Detection by Vision
              </h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">
                An end-to-end computer vision application designed to detect and categorize structural anomalies, cracks, and defects in building materials using deep learning image segmentation.
              </p>
            </div>
            {/* Bottom tags and action */}
            <div class="px-8 pb-8">
              <div class="flex flex-wrap gap-2 mb-6">
                <span class="bg-purple-50 text-purple-700 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">PyTorch</span>
                <span class="bg-pink-50 text-pink-700 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">Computer Vision</span>
                <span class="bg-blue-50 text-blue-700 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">OpenCV</span>
                <span class="bg-emerald-50 text-emerald-700 text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full uppercase">Deep Learning</span>
              </div>
              <div class="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider text-slate-950 uppercase group-hover:text-purple-600 transition-colors">
                View Project
                <i class="fa-solid fa-arrow-right text-[10px] transform group-hover:translate-x-1 transition-transform"></i>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
