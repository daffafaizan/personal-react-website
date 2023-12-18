import AnimatedComponents from "../ui/AnimatedComponents";
import Title from "../utils/Title";

function Blog() {
  return (
    <AnimatedComponents>
      <section id="aboutme">
        <div className="flex items-center justify-center flex-col text-center my-32">
          <Title>About Me</Title>
          <h1 className="title text-3xl sm:text-2xl xxs:text-xl xxxs:text-lg dark:text-white mt-10 font-bold text-justify w-9/12">
            I was born in Bandung, raised in Cirebon, and currently in Depok
            pursuing my studies at the University of Indonesia as a computer
            science undergraduate
            <span className="text-cyan-500 scale-110">.</span>
            <p className="my-6" />
            Motivated by my interests in minimalism, I realized my passion in
            front-end development. I am currently building my back-end knowledge
            and combined with my front-end skills, I am working towards becoming
            a full-stack developer
            <span className="text-cyan-500 scale-110">.</span>
            <p className="my-6" />
            In my free time, I like to study, code, and read
            <span className="text-cyan-500 scale-110">.</span>
          </h1>
        </div>
      </section>
    </AnimatedComponents>
  );
}

export default Blog;
