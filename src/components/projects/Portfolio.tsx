import PortfolioItem from "./PortfolioItem";
import portfolio from "../../data/portfolio";
import Title from "../utils/Title";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="flex flex-col items-center justify-center md:h-screen lg:h-screen xl:h-screen py-20"
    >
      <Title>Projects</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
        {portfolio.map((project) => (
          <PortfolioItem
            key={project.title}
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            link={project.link}
            target={project.target}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
