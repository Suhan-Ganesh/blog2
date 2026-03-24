import { Terminal, Mail, Github, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 w-full pt-16 pb-8 border-t border-slate-800">
      <div className="flex flex-col items-center justify-center space-y-6 px-8 max-w-7xl mx-auto text-center">
        <div className="flex items-center gap-2 mb-2">
          <Terminal className="text-cyan-400 text-3xl" />
          <span className="font-headline font-bold text-white text-2xl">Developer Insights</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Git Guide</a>
          <a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">AI Ethics</a>
          <a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Clean Code</a>
          <a className="text-slate-400 hover:text-cyan-400 transition-colors text-sm" href="#">Security</a>
        </nav>
        <div className="flex gap-6 py-4">
          <a className="text-slate-400 hover:text-cyan-400 transition-all" href="#"><Mail size={20} /></a>
          <a className="text-slate-400 hover:text-cyan-400 transition-all" href="#"><Github size={20} /></a>
          <a className="text-slate-400 hover:text-cyan-400 transition-all" href="#"><Code size={20} /></a>
        </div>
        <div className="w-full h-px bg-slate-800"></div>
        <p className="text-slate-500 text-xs">© 2026 Developer Insights. All rights reserved. Built for the modern engineer.</p>
      </div>
    </footer>
  );
}
