import Contact from "../../components/home/Contact";
import Footer from "../../components/ui/Footer";
import Intro from "../../components/home/Intro";
import Experience from "../../components/home/Experience";
import Sidebar from "../../components/ui/Sidebar";
import Technologies from "../../components/home/Technologies";
import Socials from "../../components/home/Socials";
import BlogPreview from "../../components/home/BlogPreview";
import AboutMe from "../../components/home/AboutMe";
import AnimatedCursor from "react-animated-cursor";
import { useEffect } from 'react';
import AnimatedPage from "../../components/ui/AnimatedPage";

function Home() {
  const navigation = [
    { name: "About Me", href: "#aboutme", path: "/aboutme", current: false },
    {
      name: "Technologies",
      href: "#technologies",
      path: "/technologies",
      current: false,
    },
    {
      name: "Experience",
      href: "#experience",
      path: "/experience",
      current: false,
    },
    { name: "Blog", href: "#blog", path: "/blog", current: false },
    { name: "Contact", href: "#contact", path: "/contact", current: false },
    { name: "Projects", href: "/projects", path: "/projects", current: false },
  ];

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <AnimatedPage>
      <div className="bg-[#F4F5F0] dark:bg-[#171717] text-stone-900 dark:text-[#EDEDED] min-h-screen font-inter scroll-smooth">
        <Sidebar navigation={navigation}/>
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
          <Intro />
          <AboutMe />
          <Technologies />
          <Experience />
          <BlogPreview />
          <Contact />
          <Socials />
          <Footer />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Home;
