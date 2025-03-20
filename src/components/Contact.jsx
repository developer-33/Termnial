function Contact() {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-yellow-400">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 bg-transparent border border-yellow-400 rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 bg-transparent border border-yellow-400 rounded focus:outline-none"
          />
          <textarea
            placeholder="Your Message"
            className="p-2 bg-transparent border border-yellow-400 rounded focus:outline-none"
          ></textarea>
          <button className="bg-yellow-400 text-black p-2 rounded hover:bg-yellow-300 transition">
            Send
          </button>
        </form>
      </div>
    );
  }

  export default Contact