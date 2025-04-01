export const About = () => {
  return (
    <section id="about" className="py-20 px-10 bg-gray-800 text-white">
      <div className="container mx-auto text-center md:text-left">
        <h2 className="text-4xl font-bold text-center mb-6">About Me</h2>
        <p className="text-gray-400 max-w-3xl mx-auto">
          I'm Himanshu Sharma, a B.Tech graduate in Computer Science &
          Engineering. I specialize in Data Structures & Algorithms (DSA) using
          Java and Full Stack Development (MERN Stack). Passionate about
          building scalable web applications and solving complex problems.
        </p>
      
        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Education</h2>
          <p className="text-xl text-gray-300">
            B.Tech in Computer Science & Engineering, (July 2021 – July 2025)
          </p>
          <p className="mt-2">
            Institute of Engineering & Technology, Ayodhya (Dr. Ram Manohar
            Lohia Avadh University, Ayodhya, India)
          </p>
          <p className="mt-2">
            <span className="font-bold">Relevant Coursework: </span>
            Data Structures and Algorithms, Operating Systems, Computer
            Networks, Database Management Systems (DBMS), Software Engineering
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Certifications</h3>
          <ul className="list-disc pl-6 text-gray-300">
            <li>
              Object-Oriented Programming (OOPs){" "}
              <a
                className="mx-3 text-blue-500"
                href="https://certifications.geekster.in/1m1Nk1CIAd749jWDjKSGL-geekster.pdf"
              >
                link
              </a>
            </li>
            <li>
              SQL (MySQL)
              <a
                className="mx-3 text-blue-500"
                href="https://certifications.geekster.in/J_nyrqClNtm9mBxEIktCm-geekster.pdf"
              >
                link
              </a>
            </li>
            <li>
              Git and GitHub
              <a
                className=" mx-3 text-blue-500"
                href="https://certifications.geekster.in/_K-TncejYQk8llVieLa4c-geekster.pdf"
              >
                link
              </a>
            </li>
            <li>
              TypeScript
              <a
                className="mx-3 text-blue-500"
                href="https://certifications.geekster.in/wcQUZA8m3CaJO_w07yfxp-geekster.pdf"
              >
                link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
