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
            className="h-96 w-96 xxxs:h-80 xxxs:w-80 dark:border-none rounded-full shadow-lg hover:shadow-cyan-200 hover:scale-105 duration-150"
            src="\assets\new_pp_large.jpg"
            alt=""
          />
        </div>
        <h1 className="h-auto mb-6 text-7xl xxs:text-6xl xxxs:text-5xl dark:text-white font-bold">
          Hi, I'm Daffa<span className="text-cyan-500 scale-110">.</span>
        </h1>
        <p className="text-lg xxs:text-md xxxs:text-md font-light">
          I'm a{" "}
          <span className="text-cyan-500 font-bold">
            <TypeAnimation
              sequence={[
                "Computer Science Undergraduate", // Types 'One'
                1000, // Waits 1s
                "Software Engineer", // Deletes 'One' and types 'Two'
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
      </div>
    </AnimatedComponents>
  );
}

export default Intro;
