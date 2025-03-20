function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full flex justify-between p-4 bg-black bg-opacity-75 text-yellow-400 shadow-lg z-50">
        <div className="text-xl font-bold">CYBERPORT</div>
        <ul className="flex gap-4 text-lg">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item} className="hover:text-yellow-300 transition-all cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  export default Navbar