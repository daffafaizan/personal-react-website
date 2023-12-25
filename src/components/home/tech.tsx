import TechnologyItem from "./techs";
import technologies from "../../data/technologies";
import Title from "../ui/utils/title";
import AnimatedComponents from "../ui/animations/AnimatedComponents";

function Technologies() {
  return (
    <AnimatedComponents>
      <div
        id="technologies"
        className="my-96 md:my-52 sm:my-52 xxs:my-52 xxxs:my-52  flex flex-col items-center justify-center"
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
    </AnimatedComponents>
  );
}

export default Technologies;
