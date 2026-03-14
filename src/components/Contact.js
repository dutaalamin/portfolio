import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_1o3f1un', 'template_876czll', form.current, 'pc_TStT_UQhORjnR2')
      .then(() => {
          alert('Thank you! Your message has been sent.');
          e.target.reset();
      }, () => {
          alert('Sorry, there was an error. Please try again.');
      });
  };

  return (
    <section className="relative">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
            <h2 className="text-sm font-black text-slate-800 uppercase tracking-tight">Send a Message</h2>
          </div>
          
          <form 
            ref={form} 
            onSubmit={sendEmail} 
            className="p-6 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-slate-400">Subject</label>
                <input type="text" name="user_name" required className="w-full px-3 py-2 rounded border border-slate-200 bg-slate-50 focus:border-[#00b2ff] outline-none text-sm" placeholder="Your Name" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase text-slate-400">Reply Email</label>
                <input type="email" name="user_email" required className="w-full px-3 py-2 rounded border border-slate-200 bg-slate-50 focus:border-[#00b2ff] outline-none text-sm" placeholder="Email" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase text-slate-400">Message Body</label>
              <textarea name="message" required rows="6" className="w-full px-3 py-2 rounded border border-slate-200 bg-slate-50 focus:border-[#00b2ff] outline-none text-sm resize-none" placeholder="What's on your mind?"></textarea>
            </div>
            <div className="flex justify-end pt-2">
              <button 
                type="submit" 
                className="roblox-button px-8"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
