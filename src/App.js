import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="px-10 bg-white md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between dark:text-white ">
            <h1 className="text-xl font-burtons">Alokik</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="text-xl cursor-pointer"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1jI3Pq9eWLaBXPyFMMD5v60fkcEFJjpGN/view?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl text-teal-600 font-medium md:text-6xl dark:text-teal-400">
              Alokik Kanchan
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Frontend Developer
            </h3>
            <p className="text-md py-5 leading-8 max-w-lg mx-auto md:text-xl text-gray-800 dark:text-gray-200">
              Energetic developer creating websites using React. I believe that
              learning never ends.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
            <a
              href="https://www.linkedin.com/in/alokikkanchan"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.github.com/alokik98"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="py-12">
            <img
              src="/images/avatar.png"
              alt="avatar"
              className="mx-auto rounded-full md:w-64 md:h-64"
            />
          </div>
        </section>
        {/* Introduction Section ends */}

        {/* Skills Section starts */}

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Skills I know</h3>
            <p className="text-md py-2 text-gray-800 dark:text-gray-200">
              These are the <span className="text-teal-500">skills</span> I
              learned and have some hands-on{" "}
              <span className="text-teal-500">experience</span> via personal
              projects.
            </p>
            <p className="text-md py-2 text-gray-800 dark:text-gray-200">
              As you are <span className="text-teal-500">reading</span> this, I
              am most probably <span className="text-teal-500">learning</span>{" "}
              some new skill to add to my arsenal.
            </p>
          </div>
          <div className="lg:flex gap-10 flex-wrap">
            <div className="text-center p-10 my-10 rounded-xl dark:bg-white shadow-lg">
              <div className="py-2">
                <div>
                  <img
                    src="/images/skills/web.png"
                    alt="html,css,js"
                    width="200"
                    className="mx-auto"
                  />
                </div>
              </div>
              <h4 className="py-2 text-xl">Web Technologies</h4>
            </div>
            <div className="text-center p-10 my-10 rounded-xl dark:bg-white shadow-lg">
              <div>
                <img
                  src="/images/skills/cpp.png"
                  alt="cpp"
                  width="100"
                  className="mx-auto"
                />
              </div>
              <h4 className="text-xl py-2">Programming Language</h4>
            </div>
            <div className="text-center p-10 my-10 rounded-xl dark:bg-white shadow-lg">
              <div className="py-2">
                <img
                  src="/images/skills/react.png"
                  alt="react"
                  className="mx-auto"
                  width="200"
                />
              </div>
              <div className="py-2">
                <img
                  src="/images/skills/tailwind.png"
                  alt="tailwind"
                  className="mx-auto"
                  width="200"
                />
              </div>
              <div className="py-2">
                <img
                  src="/images/skills/bootstrap.png"
                  alt="bootstrap"
                  className="mx-auto"
                  width="200"
                />
              </div>
              <h4 className="py-2 text-xl">Frameworks</h4>
            </div>
            <div className="text-center p-10 my-10 rounded-xl dark:bg-white shadow-lg">
              <div className="py-2">
                <img
                  src="/images/skills/aws.png"
                  alt="aws_cloud"
                  className="mx-auto"
                  width="200"
                />
              </div>
              <h4 className="text-xl py-2">Cloud</h4>
            </div>
            <div className="text-center p-10 my-10 rounded-xl dark:bg-white shadow-lg">
              <div className="py-2">
                <img
                  src="/images/skills/docker.jpeg"
                  alt="docker"
                  className="mx-auto"
                  width="200"
                />
              </div>
              <h4 className="text-xl py-2">Containerization</h4>
            </div>
            <div className="text-center p-10 my-10 rounded-xl dark:bg-white shadow-lg">
              <div className="py-2">
                <img
                  src="/images/skills/vim.png"
                  alt="vim_editor"
                  className="mx-auto"
                  width="200"
                />
              </div>
              <div className="py-2">
                <img
                  src="/images/skills/jira.png"
                  alt="jira"
                  className="mx-auto"
                  width="200"
                />
              </div>
              <h4 className="text-xl py-2">Extra</h4>
            </div>
          </div>
        </section>
        {/* Skills Section ends */}

        {/* Project Section starts */}
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
            <p className="py-2 text-md text-gray-800 dark:text-gray-200">
              These are few <span className="text-teal-500">projects</span> I
              have made till now.
            </p>
            <p className="text-md py-2 dark:text-gray-200 text-gray-800">
              While you are <span className="text-teal-500">looking</span> on my
              projects, I maybe <span className="text-teal-500">creating</span>{" "}
              some new project to learn something new.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 dark:bg-white rounded-lg shadow-lg">
              <img
                src="/images/projects/textutils.png"
                alt="textutils"
                className="rounded-lg object-cover"
                width="100%"
                height="100%"
              />
              <p className="text-center border-t-2 py-2">
                <a
                  href="http://textutils-project.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  TextUtils App
                </a>
              </p>
            </div>
            <div className="basis-1/3 flex-1 dark:bg-white rounded-lg shadow-lg">
              <img
                src="/images/projects/quote_generator.png"
                alt="quote_generator"
                className="rounded-lg object-cover"
                width="100%"
                height="100%"
              />
              <p className="text-center border-t-2 py-2">
                <a
                  href="https://random-quote-machine-wine.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Random Quote Generator
                </a>
              </p>
            </div>
            <div className="basis-1/3 flex-1 dark:bg-white rounded-lg shadow-lg">
              <img
                src="/images/projects/password_generator.png"
                alt="password_generator"
                className="rounded-lg object-cover"
                width="100%"
                height="100%"
              />
              <p className="text-center border-t-2 py-2">
                <a
                  href="https://random-password-generator-alpha.vercel.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Random Password Generator
                </a>
              </p>
            </div>
            <div className="basis-1/3 flex-1 dark:bg-white rounded-lg shadow-lg">
              <img
                src="/images/projects/movies_finder.png"
                alt="movies_finder"
                className="rounded-t-lg object-cover"
                width="100%"
                height="100%"
              />
              <p className="text-center border-t-2 py-2">
                <a
                  href="https://movies-finder-9b6fd.web.app/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Movies Finder
                </a>
              </p>
            </div>
          </div>
        </section>
        {/* Project Section ends */}
      </main>
    </div>
  );
}

export default App;
