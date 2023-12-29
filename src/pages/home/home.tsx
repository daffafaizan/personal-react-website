import { useEffect } from "react";
import AnimatedPage from "../../components/ui/animations/AnimatedPage";
import Sidebar from "../../components/ui/sections/sidebar";
import Intro from "../../components/main/intro";
import AboutMe from "../../components/main/aboutme";
import Technologies from "../../components/main/techs";
import Experience from "../../components/main/experiences";
import Projects from "../../components/main/projects";
import BlogPreview from "../../components/main/blog";
import Contact from "../../components/main/contact";
import Socials from "../../components/main/socials";
import Footer from "../../components/ui/sections/footer";

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
      <div className="bg-[#F4F5F0] dark:bg-[#171717] text-stone-900 dark:text-[#EDEDED] font-inter scroll-smooth">
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
