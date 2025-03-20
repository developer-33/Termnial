function About() {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-yellow-400">
        <div className="p-4 border border-yellow-400 bg-opacity-10 rounded-xl shadow-md hover:scale-105 transform transition-transform duration-500">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-lg text-yellow-300">
            Cyberpunk enthusiast, developer, and tech explorer with a passion for futuristic design.
          </p>
        </div>
      </div>
    );
  }

  export default About