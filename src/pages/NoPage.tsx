import Sidebar from "../components/ui/Sidebar";
import AnimatedCursor from "react-animated-cursor";

function Projects() {
  return (
    <div className="bg-[#F4F5F0] dark:bg-[#171717] text-stone-900 dark:text-[#EDEDED] min-h-screen font-inter scroll-smooth">
      <AnimatedCursor
        color="255,255,255"
        innerSize={12}
        outerSize={45}
        innerScale={1}
        outerScale={2}
        outerAlpha={1}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "#333",
          mixBlendMode: "exclusion",
        }}
      />
      <div className="max-w-6xl w-11/12 mx-auto">Error 404</div>
    </div>
  );
}

export default Projects;
