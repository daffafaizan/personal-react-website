import Sidebar from "../../components/ui/Sidebar";
import Portfolio from "../../components/projects/Portfolio";
import Footer from "../../components/ui/Footer";
import Socials from "../../components/home/Socials";
import { useEffect } from "react";
import AnimatedPage from "../../components/ui/AnimatedPage";

function Projects() {
  const navigation = [
    { name: "Home", href: "/home", path: "/home", current: false },
    { name: "Blog", href: "/blog", path: "/blog", current: false },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <div className="bg-[#F4F5F0] dark:bg-[#171717] text-stone-900 dark:text-[#EDEDED] min-h-screen font-inter scroll-smooth">
        <Sidebar navigation={navigation} />
        <div className="max-w-6xl w-11/12 mx-auto">
          <Portfolio />
          <Socials />
          <Footer />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Projects;
