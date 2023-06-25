import Contact from "./components/Contact";
import Footer from "./components/ui/Footer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Navbar from "./components/ui/Navbar";
import Sidebar from "./components/ui/Sidebar";
import Technologies from "./components/Technologies";
import Socials from "./components/Socials";
import Blog from "./components/Blog";
import AboutMe from "./components/AboutMe";
import AnimatedCursor from "react-animated-cursor";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-[#F4F5F0] dark:bg-[#171717] text-stone-900 dark:text-[#EDEDED] min-h-screen font-inter scroll-smooth">
          <Sidebar />
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
            {/* <Portfolio /> */}
            <AboutMe />
            <Technologies />
            <Experience />
            <Blog />
            <Contact />
            <Socials />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
