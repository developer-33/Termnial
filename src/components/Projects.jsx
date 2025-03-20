function Projects() {
    const projectList = [
      { name: "Neon Hub", desc: "A glowing dashboard of the future." },
      { name: "CyberStore", desc: "E-commerce in 2077." },
    ];
  
    return (
      <div className="h-screen bg-black text-yellow-400 p-8">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="border border-yellow-400 p-6 rounded-xl bg-opacity-10 hover:scale-105 transform transition-transform duration-500 shadow-md"
            >
              <h3 className="text-2xl font-semibold">{project.name}</h3>
              <p className="text-yellow-300">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default Projects