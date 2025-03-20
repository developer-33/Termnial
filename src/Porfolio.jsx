import Terminal from "./Termainl";
import { useState, useEffect, useRef } from "react";

const Portfolio = () => {
  const [text, setText] = useState("");
  const phrases = ["Full-Stack Developer", "React & Tailwind Enthusiast", "Tech Innovator"];
  const indexRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(phrases[indexRef.current]);
      indexRef.current = (indexRef.current + 1) % phrases.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-green-400">Hi, I'm Fletcher Burton</h1>
        <p className="mt-4 text-xl text-gray-300 transition-opacity duration-500">{text} ✨</p>
      </header>

      {/* Terminal Section */}
      <main className="w-full max-w-4xl px-4">
        <Terminal />
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 text-center text-gray-400">
        <p className="text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors duration-300">
            GitHub
          </a>
          |
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white transition-colors duration-300">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
