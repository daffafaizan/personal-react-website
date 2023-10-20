import Sidebar from "../../components/ui/Sidebar";
import Footer from "../../components/ui/Footer";
import Socials from "../../components/home/Socials";
import BlogContent from "../../components/blog/BlogContent";
import { useEffect } from "react";
import AnimatedPage from "../../components/ui/AnimatedPage";

function Blog() {
  const navigation = [
    { name: "Home", href: "/home", path: "/home", current: false },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedPage>
      <div className="bg-[#F4F5F0] dark:bg-[#171717] text-stone-900 dark:text-[#EDEDED] min-h-screen font-inter scroll-smooth">
        <Sidebar navigation={navigation} />
        <div className="max-w-6xl w-11/12 mx-auto">
          <BlogContent />
          <Socials />
          <Footer />
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Blog;
