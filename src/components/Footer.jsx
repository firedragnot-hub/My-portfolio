import React from 'react';

export default function Footer() {
  return (
    <footer class="py-8 px-6 md:px-12 bg-slate-950 text-slate-500 border-t border-slate-900 text-center text-sm relative z-10">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; 2026 Aman Singh. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#about" class="hover:text-white transition-colors">About</a>
          <a href="#skills" class="hover:text-white transition-colors">Skills</a>
          <a href="#projects" class="hover:text-white transition-colors">Projects</a>
          <a href="#contact" class="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
