import Sidebar from "../../components/ui/Sidebar";
import Footer from "../../components/ui/Footer";
import Socials from "../../components/home/Socials";
import BlogContent from "../../components/blog/BlogContent";
import AnimatedCursor from "react-animated-cursor";
import { useEffect } from 'react';

function Blog() {
  const navigation = [
    { name: "Home", href: "/home", path: "/home", current: false },
    { name: "Projects", href: "/projects", path: "/projects", current: false },
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-[#F4F5F0] dark:bg-[#171717] text-stone-900 dark:text-[#EDEDED] min-h-screen font-inter scroll-smooth">
      <Sidebar navigation={navigation} />
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
      <div className="max-w-6xl w-11/12 mx-auto">
        <BlogContent />
        <Socials />
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
