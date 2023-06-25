import TechnologyItem from "./TechnologyItem";
import technologies from "../../data/technologies";
import Title from "../utils/Title";

function Technologies() {
  return (
    <div
      id="technologies"
      className="h-screen flex flex-col items-center justify-center"
    >
      <Title>Technologies I've used</Title>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-7 xxxs:gap-x-0 xxxs:gap-y-5 xxs:gap-x-0 xxs:gap-y-5">
          {technologies.map((tech) => (
            <TechnologyItem
              key={tech.title}
              title={tech.title}
              icon={tech.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
