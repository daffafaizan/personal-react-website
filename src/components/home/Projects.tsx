import portfolio from "../../data/portfolio";
import Title from "../utils/title";
import AnimatedComponents from "../ui/AnimatedComponents";
import ProjectItem from "./project";

function Projects() {
  return (
    <AnimatedComponents>
      <section id="projects" className="scroll-m-10">
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
