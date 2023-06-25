import AnimatedComponents from "../ui/AnimatedComponents";
import Title from "../utils/Title";
import { Icon } from "@iconify/react";

function Todolist() {
  return (
    <AnimatedComponents>
      <div
        id="Todolist"
        className="flex flex-col items-center justify-center h-screen py-20"
      >
        <Title>Todolist Under Construction</Title>
        <Icon
          icon="fluent-emoji:construction"
          className="h-36 w-36 xxs:h-36 xxs:w-36 xxxs:h-36 xxxs:w-36 hover:scale-110 duration-300"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {/* {portfolio.map((project) => (
          <PortfolioItem
            key={project.title}
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            link={project.link}
            target={project.target}
          />
        ))} */}
        </div>
      </div>
    </AnimatedComponents>
  );
}

export default Todolist;
