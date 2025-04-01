export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-10 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Feel free to reach out to me for collaboration, opportunities, or just
          to connect!
        </p>
        <form className="mt-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white border border-gray-600 h-32"
          ></textarea>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded font-bold shadow-lg">
            Send Message
          </button>
        </form>
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/himanshu-sharma-826582235/"
            className="text-xl"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.youtube.com/@The_Story_of_Himanshu"
            className="text-xl"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://github.com/Himanshu-Sharma713/" className="text-xl">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
