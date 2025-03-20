function Skills() {
    const skills = ["React", "Tailwind CSS", "JavaScript", "Node.js"];
  
    return (
      <div className="h-screen bg-black text-yellow-400 p-8 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="space-y-4 w-3/4">
          {skills.map((skill, index) => (
            <div key={index} className="relative w-full h-8 bg-gray-800 rounded-full">
              <div className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full animate-grow">
                <span className="absolute right-0 text-black font-bold px-2">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default Skills