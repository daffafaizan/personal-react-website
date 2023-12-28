import experience from "../../data/experience";
import ExperienceItem from "./experience";
import Title from "../ui/utils/title";
import AnimatedComponents from "../ui/animations/AnimatedComponents";

function Experience() {
  return (
    <AnimatedComponents>
      <section id="experience" className="min-h-screen scroll-m-10">
        <div className="flex flex-col md:flex-row items-center justify-center my-32">
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
