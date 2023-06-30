import { TypeAnimation } from "react-type-animation";
import AnimatedComponents from "../ui/AnimatedComponents";

function Intro() {
  return (
    <AnimatedComponents>
      <div
        id="intro"
        className="flex items-center justify-center flex-col text-center h-screen"
      >
        <div className="max-w-md mb-20">
          <img
            className="h-96 w-96 xxxs:h-80 xxxs:w-80 rounded-full shadow-lg hover:shadow-cyan-200 hover:scale-105 duration-300"
            src="\assets\daffasand.jpg"
            alt=""
          />
        </div>
        <h1 className="h-auto mb-6 text-7xl xxs:text-6xl xxxs:text-5xl dark:text-white font-bold">
          Hi, I'm <span className="text-cyan-500">Daffa</span>
        </h1>
        <p className="text-lg xxs:text-md xxxs:text-md font-medium">
          I'm a{" "}
          <span className="text-cyan-500 font-bold">
            <TypeAnimation
              sequence={[
                "Computer Science Student", // Types 'One'
                1000, // Waits 1s
                "Full-stack Developer", // Deletes 'One' and types 'Two'
                1000, // Waits 2s
                "Tech Enthusiast", // Types 'Three' without deleting 'Two'
                1000,
                () => {
                  console.log("Sequence completed");
                },
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </span>
        </p>
        {/* <p className="text-base mb-3 font-medium">
        Computer Science Undergraduate TODO
      </p> */}
        {/* <p className="text-sm max-w-xl mb-6 font-bold">
        I am an undergraduate student studying in the University of Indonesia
        TODO{" "}
        <a
          href="https://www.linkedin.com/in/daffa-muhammad-faizan/"
          target="_blank"
          className="text-cyan-500 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          rel="noreferrer noopener"
        >
          https://www.linkedin.com/in/daffa-muhammad-faizan/ TODO
        </a>
      </p> */}
      </div>
    </AnimatedComponents>
  );
}

export default Intro;
