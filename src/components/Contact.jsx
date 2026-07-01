import React from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    // Use Web3Forms access key from environment variables
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      alert("Form submission is not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY to your environment variables.");
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        e.target.reset();
      } else {
        console.error("Web3Forms Error:", data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" class="py-24 px-6 md:px-12 lg:px-24 xl:px-32 bg-slate-950 text-white relative">
      {/* Subtle background grids */}
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="flex flex-col lg:flex-row gap-16">
          
          {/* Left: contact info */}
          <div class="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <span class="text-indigo-400 font-bold text-xs uppercase tracking-widest block mb-3">Get In Touch</span>
              <h2 class="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
                Let's Discuss Your Next Innovation
              </h2>
              <p class="text-slate-400 font-medium leading-relaxed mb-8 max-w-md">
                Whether you have questions, a project collaboration in mind, or just want to chat about systems programming and machine learning—feel free to drop a message.
              </p>
            </div>

            {/* Contacts */}
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 text-indigo-400">
                  <i class="fa-solid fa-envelope text-lg"></i>
                </div>
                <div>
                  <span class="block text-xs font-semibold text-slate-500 uppercase tracking-wide">Write to me</span>
                  <a href="mailto:amansingha3639@gmail.com" class="text-white hover:text-indigo-400 transition-colors font-bold">amansingha3639@gmail.com</a>
                </div>
              </div>
              
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 text-indigo-400">
                  <i class="fa-brands fa-github text-lg"></i>
                </div>
                <div>
                  <span class="block text-xs font-semibold text-slate-500 uppercase tracking-wide">Explore code</span>
                  <a href="https://github.com/firedragnot-hub" target="_blank" rel="noopener noreferrer" class="text-white hover:text-indigo-400 transition-colors font-bold">github.com/firedragnot-hub</a>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800 text-indigo-400">
                  <i class="fa-brands fa-linkedin-in text-lg"></i>
                </div>
                <div>
                  <span class="block text-xs font-semibold text-slate-500 uppercase tracking-wide">Professional network</span>
                  <a href="https://www.linkedin.com/in/aman-singh-213910294/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-indigo-400 transition-colors font-bold">linkedin.com/in/aman-singh</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div class="w-full lg:w-1/2">
            <form onSubmit={handleSubmit} class="p-8 md:p-10 bg-slate-900/50 backdrop-blur-md border border-slate-800/80 rounded-3xl space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label for="name" class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input type="text" id="name" name="name" required class="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-4 text-white text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300" placeholder="Aman Singh" />
                </div>
                <div class="space-y-2">
                  <label for="email" class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</label>
                  <input type="email" id="email" name="email" required class="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-4 text-white text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300" placeholder="aman@example.com" />
                </div>
              </div>
              <div class="space-y-2">
                <label for="subject" class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Subject</label>
                <input type="text" id="subject" name="subject" required class="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-4 text-white text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300" placeholder="Project Collaboration Request" />
              </div>
              <div class="space-y-2">
                <label for="message" class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                <textarea id="message" name="message" rows="5" required class="w-full bg-slate-950 border border-slate-800 rounded-xl py-4 px-4 text-white text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 resize-none" placeholder="Write your message details here..."></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                class="w-full bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-indigo-500/10 transform active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitStatus === 'success' && (
                <div class="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-sm font-medium text-center">
                  Message sent successfully! Thank you for reaching out.
                </div>
              )}

              {submitStatus === 'error' && (
                <div class="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-xl text-sm font-medium text-center">
                  Failed to send message. Please try again or email directly.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
