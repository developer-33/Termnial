import { useState, useRef, useEffect } from "react";

const TerminalPortfolio = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [theme, setTheme] = useState("dark");
  const outputRef = useRef(null);

  const commands = {
    help: (
      <div>
        <p className="text-green-400">Available Commands:</p>
        <ul className="list-disc list-inside">
          <li>about - Learn more about me</li>
          <li>projects - View my projects</li>
          <li>skills - View my skillset</li>
          <li>resume - Download my resume</li>
          <li>contact - Get in touch</li>
          <li>theme - Toggle between light and dark mode</li>
          <li>clear - Clear the terminal</li>
        </ul>
      </div>
    ),
    about: (
      <div className="text-blue-400">
        <p>👋 Hi, I'm a passionate developer who loves building cool stuff.</p>
        <p>I specialize in React, Tailwind, and backend development.</p>
      </div>
    ),
    projects: (
      <div className="text-purple-400">
        <p>🚀 My Projects:</p>
        <ul>
          <li>
            <a
              href="https://github.com/yourusername/project1"
              target="_blank"
              className="text-yellow-400 hover:underline"
            >
              Project 1 - A cool web app
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yourusername/project2"
              target="_blank"
              className="text-yellow-400 hover:underline"
            >
              Project 2 - Another awesome thing
            </a>
          </li>
        </ul>
      </div>
    ),
    skills: (
      <div className="text-cyan-400">
        <p>💻 Skills:</p>
        <ul>
          <li>JavaScript, React, Node.js, Express</li>
          <li>Tailwind CSS, MongoDB, PostgreSQL</li>
          <li>WebSockets, APIs, GraphQL</li>
        </ul>
      </div>
    ),
    resume: (
      <div>
        <a
          href="/resume.pdf"
          download
          className="text-yellow-400 hover:underline"
        >
          📄 Click here to download my resume.
        </a>
      </div>
    ),
    contact: (
      <div className="text-red-400">
        <p>📧 Email: hacker@cyber.com</p>
        <p>🐙 GitHub: github.com/hacker</p>
        <p>🔗 LinkedIn: linkedin.com/in/hacker</p>
      </div>
    ),
    theme: (
      <p className="text-yellow-400">
        Theme switched to {theme === "dark" ? "light" : "dark"} mode!
      </p>
    ),
    clear: "clear",
  };

  const welcomeMessage = (
    <div className="text-green-400">
      <p>Welcome to my Terminal Portfolio! 👨‍💻</p>
      <p>
        Type <span className="text-yellow-400">"help"</span> to see the list of
        available commands.
      </p>
    </div>
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleCommand = (command) => {
    // Check for sudo command
    if (command.startsWith("sudo")) {
      setOutput((prevOutput) => [
        ...prevOutput,
        <div key={prevOutput.length} className="text-white">
          <span className="text-green-400">root@portfolio:~$</span> {command}
        </div>,
        <p className="text-red-400">⛔️ Permission denied: You are not root!</p>,
      ]);
      return;
    }

    if (command === "theme") {
      toggleTheme();
      setOutput((prevOutput) => [
        ...prevOutput,
        <div key={prevOutput.length} className="text-white">
          <span className="text-green-400">root@portfolio:~$</span> {command}
        </div>,
        <p className="text-yellow-400">
          Theme switched to {theme === "dark" ? "light" : "dark"} mode!
        </p>,
      ]);
      return;
    }

    if (command === "clear") {
      setOutput([]);
      return;
    }

    const response = commands[command] || (
      <p className="text-red-500">❌ Command not found: {command}</p>
    );

    setOutput((prevOutput) => [
      ...prevOutput,
      <div key={prevOutput.length} className="text-white">
        <span className="text-green-400">root@portfolio:~$</span> {command}
      </div>,
      <div key={prevOutput.length + 1}>{response}</div>,
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setHistory([...history, input.trim()]);
      setHistoryIndex(history.length + 1);
      handleCommand(input.trim());
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowUp") {
      if (historyIndex > 0) {
        setHistoryIndex(historyIndex - 1);
        setInput(history[historyIndex - 1]);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex < history.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setInput(history[historyIndex + 1]);
      } else {
        setHistoryIndex(history.length);
        setInput("");
      }
    }
  };

  useEffect(() => {
    setOutput([welcomeMessage]);
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    outputRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-hex text-yellow-400 border border-gray-800"
          : "bg-white text-black border border-gray-300"
      } font-mono h-[500px] w-full p-4 rounded-md overflow-y-auto shadow-lg`}
    >
      <div>
        {output.map((line, index) => (
          <div key={index} className="whitespace-pre-line">
            {line}
          </div>
        ))}
        <div ref={outputRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex items-center mt-2">
        <span className="mr-2 text-green-500">root@portfolio:~$</span>
        <input
          type="text"
          className="bg-transparent outline-none w-full caret-green-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </form>
    </div>
  );
};

export default TerminalPortfolio;
