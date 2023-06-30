import AnimatedComponents from "../ui/AnimatedComponents";
import Title from "../utils/Title";
import { Icon } from "@iconify/react";

function Blog() {
  return (
    <AnimatedComponents>
      <section id="aboutme">
        <div className="flex items-center justify-center flex-col text-center h-screen">
          <Title>About Me Under Construction</Title>
          <Icon
            icon="fluent-emoji:construction"
            className="h-36 w-36 xxs:h-36 xxs:w-36 xxxs:h-36 xxxs:w-36 hover:scale-110 duration-300"
          />
          <h1 className="title text-3xl sm:text-2xl xxs:text-2xl xxxs:text-xl dark:text-white mb-10 md:mb-10 font-bold text-justify w-9/12">
            I was born in Bandung, raised in Cirebon, and currently pursuing my
            studies in the University of Indonesia as a computer science major.
            <p className="my-6" />
            As a minimalistic
            <p className="my-6" />
            In my free time, I like to play competitive FPS and strategy games
            or hang out with my friends.
          </h1>
        </div>
      </section>
    </AnimatedComponents>
  );
}

export default Blog;
