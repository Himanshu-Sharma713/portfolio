export const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Himanshu's Portfolio</h1>
        <ul className="flex space-x-4 mx-9">
          <li>
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
