import portfolio from "../../data/projects";
import Title from "../ui/utils/title";
import AnimatedComponents from "../ui/animations/AnimatedComponents";
import ProjectItem from "./project";

function Projects() {
  return (
    <AnimatedComponents>
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center"
      >
        <Title>Projects</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {portfolio.map((project) => (
            <ProjectItem
              key={project.title}
              title={project.title}
              status={project.status}
              imgUrl={project.imgUrl}
              stack={project.stack}
              link={project.link}
              target={project.target}
            />
          ))}
        </div>
      </section>
    </AnimatedComponents>
  );
}

export default Projects;
