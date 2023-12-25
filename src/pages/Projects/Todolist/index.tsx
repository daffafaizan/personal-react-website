import Sidebar from "../../../components/ui/sidebar";
import Footer from "../../../components/ui/footer";
import Socials from "../../../components/home/socials";
import { useEffect } from "react";
import AnimatedPage from "../../../components/ui/AnimatedPage";
import SimpleTodolist from "../../../components/todolist/todolist";

function Projects() {
  const navigation = [
    { name: "Home", href: "/home", path: "/home", current: false },
    { name: "Projects", href: "/projects", path: "/projects", current: false },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <div className="bg-[#F4F5F0] dark:bg-[#171717] text-stone-900 dark:text-[#EDEDED] min-h-screen font-inter scroll-smooth">
        <Sidebar navigation={navigation} />
        <div className="max-w-6xl w-11/12 mx-auto">
          <SimpleTodolist />
          <Socials />
          <Footer />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Projects;
