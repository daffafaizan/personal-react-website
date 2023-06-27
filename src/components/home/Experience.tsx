import experience from "../../data/experience";
import ExperienceItem from "./ExperienceItem";
import Title from "../utils/Title";
import AnimatedComponents from "../ui/AnimatedComponents";

function Experience() {
  return (
    <AnimatedComponents>
      <section id="experience" className="pt-10">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-11/12">
            <Title>Experience</Title>
            {experience.map((item) => (
              <ExperienceItem
                key={item.organization}
                year={item.year}
                organization={item.organization}
                position={item.position}
                details={item.details}
              />
            ))}
          </div>
        </div>
      </section>
    </AnimatedComponents>
  );
}

export default Experience;