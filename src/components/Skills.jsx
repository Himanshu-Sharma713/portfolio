export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-10 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Skills</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Below are the technologies I have worked with:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">Java</div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">JavaScript</div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">TypeScript</div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">SQL</div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">Node.js</div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">Express.js</div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">MongoDB</div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">MySQL</div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">React.js</div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">Redux</div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            Tailwind CSS
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
            Git & GitHub
          </div>
        </div>
      </div>
    </section>
  );
};
