import { Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/70 backdrop-blur-xl fixed top-0 w-full z-50 shadow-sm">
      <div className="flex justify-between items-center h-20 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <Terminal className="text-primary text-3xl" />
          <span className="text-2xl font-black tracking-tighter text-on-surface font-headline">Developer Insights</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a className="text-primary font-bold border-b-2 border-primary transition-colors duration-200" href="#">Home</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">Articles</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-200" href="#">Guides</a>
        </nav>
        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl font-bold active:opacity-80 active:scale-95 transition-all">
          Subscribe
        </button>
      </div>
    </header>
  );
}
