import "@fortawesome/fontawesome-free/css/all.min.css";
export const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-10"
    >
      <div className="md:w-1/2 space-y-4">
        <p className="text-lg text-gray-500">Welcome In My Feed</p>
        <h1 className="text-4xl font-bold text-blue-600 hover:text-blue-300">
          Himanshu Sharma
        </h1>
        <p className="text-gray-400">
          Bachelor of Technology in Computer Science & Engineering with a strong
          foundation in Data Structures & Algorithms (DSA) using Java and
          expertise in Full Stack Development (MERN Stack). Certified in
          Object-Oriented Programming (OOPs), Git & GitHub, SQL, and Responsive
          Web Design. Passionate about building scalable web applications and
          solving complex problems. Actively seeking opportunities to contribute
          to impactful real-world projects.
        </p>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://www.linkedin.com/in/himanshu-sharma-826582235/"
            className="text-xl hover:scale-205"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Himanshu-Sharma713/"
            className="text-xl hover:scale-205"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.youtube.com/@The_Story_of_Himanshu"
            className="text-xl hover:scale-205"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className="font-bold text-gray-500 mt-6">Currently working on</p>
        <div className="flex space-x-4 mt-2">
          <img
            src="/mongodb.jpg"
            alt="MongoDB"
            className="h-10 w-10 rounded-lg shadow-lg p-1 bg-gray-800 hover:scale-205 transition-transform duration-300 hover:bg-gray-300"
          />
          <img
            src="/express.png"
            alt="Express.js"
            className="h-10 w-10 rounded-lg shadow-lg p-1 bg-gray-800 hover:scale-205 transition-transform duration-300 hover:bg-gray-300"
          />
          <img
            src="/reactjs.png"
            alt="React.js"
            className="h-10 w-10 rounded-lg shadow-lg p-1 bg-gray-800 hover:scale-205 transition-transform duration-300 hover:bg-gray-300"
          />
          <img
            src="/node.png"
            alt="Node.js"
            className="h-10 w-10 rounded-lg shadow-lg p-1 bg-gray-800 hover:scale-205 transition-transform duration-300 hover:bg-gray-300"
          />
        </div>
      </div>
      <div className="md:w-1/3 flex justify-center mx-3 mt-5 md:mt-0">
        <img
          src="/icon.jpg"
          alt="user"
          className="rounded-full border-5 border-blue-700 shadow-lg hover:scale-105 transition-transform duration-300 hover:border-yellow-300"
        />
      </div>
    </section>
  );
};
