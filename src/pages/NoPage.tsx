import Sidebar from "../components/ui/sidebar";
import { useEffect } from "react";
import AnimatedPage from "../components/ui/AnimatedPage";
import Error404 from "../components/nopage/error";

function Blog() {
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
          <Error404 />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Blog;
