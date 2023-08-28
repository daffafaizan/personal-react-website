import Contact from "../../components/home/Contact";
import Footer from "../../components/ui/Footer";
import Intro from "../../components/home/Intro";
import Experience from "../../components/home/Experience";
import Sidebar from "../../components/ui/Sidebar";
import Technologies from "../../components/home/Technologies";
import Socials from "../../components/home/Socials";
import BlogPreview from "../../components/home/BlogPreview";
import AboutMe from "../../components/home/AboutMe";
import { useEffect } from "react";
import AnimatedPage from "../../components/ui/AnimatedPage";
import Projects from "../../components/home/Projects";

function Home() {
  const navigation = [
    { name: "About Me", href: "#aboutme", path: "/aboutme", current: false },
    {
      name: "Technologies",
      href: "#technologies",
      path: "/technologies",
      target: "",
      rel: "",
      current: false,
    },
    {
      name: "Experience",
      href: "#experience",
      path: "/experience",
      target: "",
      rel: "",
      current: false,
    },
    {
      name: "Projects",
      href: "#projects",
      path: "/projects",
      target: "",
      rel: "",
      current: false,
    },
    {
      name: "Blog",
      href: "#blog",
      path: "/blog",
      target: "",
      rel: "",
      current: false,
    },
    {
      name: "Contact",
      href: "#contact",
      path: "/contact",
      target: "",
      rel: "",
      current: false,
    },
    {
      name: "GitHub Repo",
      href: "https://github.com/daffafaizan/personal-react-website",
      path: "https://github.com/daffafaizan/personal-react-website",
      target: "_blank",
      rel: "noopener noreferrer",
      current: false,
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <div className="bg-[#F4F5F0] dark:bg-[#171717] text-stone-900 dark:text-[#EDEDED] min-h-screen font-inter scroll-smooth">
        <Sidebar navigation={navigation} />
        <div className="max-w-6xl w-11/12 mx-auto">
          <Intro />
          <AboutMe />
          <Technologies />
          <Experience />
          <Projects />
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
