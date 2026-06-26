import React from 'react';

export default function Skills() {
  return (
    <section id="skills" class="py-24 px-6 md:px-12 lg:px-24 xl:px-32 bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-indigo-600 font-bold text-xs uppercase tracking-widest block mb-3">My Stack</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">Technical Expertise</h2>
          <p class="text-slate-600 font-medium">A structured breakdown of programming languages, tools, and technical methodologies I work with.</p>
        </div>

        {/* Skills Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Languages */}
          <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <i class="fa-solid fa-code text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-950 mb-4 border-b border-slate-100 pb-2">Languages</h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                <i class="fa-brands fa-python text-indigo-500 w-5 text-center"></i> Python
              </li>
              <li class="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                <i class="fa-brands fa-js text-yellow-500 w-5 text-center"></i> JavaScript
              </li>
              <li class="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                <i class="fa-solid fa-terminal text-blue-500 w-5 text-center"></i> C / C++
              </li>
            </ul>
          </div>

          {/* Backend */}
          <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-100 transition-all duration-300">
            <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <i class="fa-solid fa-server text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-950 mb-4 border-b border-slate-100 pb-2">Backend Stack</h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                <i class="fa-solid fa-pepper-hot text-emerald-500 w-5 text-center"></i> Flask
              </li>
              <li class="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                <i class="fa-brands fa-node-js text-green-500 w-5 text-center"></i> Node.js
              </li>
              <li class="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                <i class="fa-solid fa-cloud-arrow-down text-blue-500 w-5 text-center"></i> REST APIs
              </li>
            </ul>
          </div>

          {/* Data Science & ML */}
          <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-purple-100 transition-all duration-300">
            <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
              <i class="fa-solid fa-brain text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-950 mb-4 border-b border-slate-100 pb-2">Data Science & ML</h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                <i class="fa-solid fa-diagram-project text-purple-500 w-5 text-center"></i> Random Forest
              </li>
              <li class="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                <i class="fa-solid fa-chart-line text-pink-500 w-5 text-center"></i> Linear Regression
              </li>
              <li class="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                <i class="fa-solid fa-wand-magic-sparkles text-violet-500 w-5 text-center"></i> Predictive Modeling
              </li>
            </ul>
          </div>

          {/* Systems */}
          <div class="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300">
            <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <i class="fa-solid fa-network-wired text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-950 mb-4 border-b border-slate-100 pb-2">Systems</h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                <i class="fa-brands fa-git-alt text-orange-500 w-5 text-center"></i> Git Version Control
              </li>
              <li class="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                <i class="fa-solid fa-eye text-blue-500 w-5 text-center"></i> Computer Vision & CNNs
              </li>
              <li class="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                <i class="fa-solid fa-circle-nodes text-indigo-500 w-5 text-center"></i> TCP/IP Networking
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
