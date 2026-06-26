import React from 'react';

export default function Achievements() {
  return (
    <section id="achievements" class="py-24 px-6 md:px-12 lg:px-24 xl:px-32 bg-slate-50 border-b border-slate-100">
      <div class="max-w-7xl mx-auto">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <span class="text-indigo-600 font-bold text-xs uppercase tracking-widest block mb-3">Milestones</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">Key Achievements</h2>
          <p class="text-slate-600 font-medium">Recognitions and academic pursuits reflecting my focus on competitive programming and fundamental CS excellence.</p>
        </div>

        {/* Achievements Card Showcase */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Highlight 1: CodeVita */}
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-200 text-6xl font-extrabold tracking-tight group-hover:bg-indigo-100/50 transition-colors select-none">
              01
            </div>
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <i class="fa-solid fa-trophy text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-950 mb-3">TCS CodeVita Participant</h3>
            <p class="text-sm text-slate-600 leading-relaxed font-medium">
              Competed in the global coding arena, solving algorithmic problems under time constraints, demonstrating proficiency in data structures and optimized execution.
            </p>
          </div>

          {/* Highlight 2: GATE CS Prep */}
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-200 text-6xl font-extrabold tracking-tight group-hover:bg-emerald-100/50 transition-colors select-none">
              02
            </div>
            <div class="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <i class="fa-solid fa-book-open text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-950 mb-3">Active GATE CS Prep</h3>
            <p class="text-sm text-slate-600 leading-relaxed font-medium">
              Dedicated study of Graduate Aptitude Test in Engineering curriculum, establishing rigorous command of Operating Systems, Databases, Network Architectures, and Theory of Computation.
            </p>
          </div>

          {/* Highlight 3: Competitive Programming */}
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center text-purple-200 text-6xl font-extrabold tracking-tight group-hover:bg-purple-100/50 transition-colors select-none">
              03
            </div>
            <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6">
              <i class="fa-solid fa-code text-xl"></i>
            </div>
            <h3 class="text-lg font-bold text-slate-950 mb-3">Competitive Programming</h3>
            <p class="text-sm text-slate-600 leading-relaxed font-medium">
              Regularly solving complex problem-sets focused on dynamic programming, graph traversal, and mathematical modeling on various competitive platforms.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
