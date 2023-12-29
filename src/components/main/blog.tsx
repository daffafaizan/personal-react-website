import Title from "../ui/utils/title";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import AnimatedComponents from "../ui/animations/AnimatedComponents";

function BlogPreview() {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/home";
    navigate(path);
  };

  return (
    <AnimatedComponents>
      <section id="blog">
        <div className="min-h-screen flex items-center justify-center flex-col text-center h-screen">
          <Title>Blog Under Construction</Title>
          <Icon
            icon="fluent-emoji:construction"
            className="h-36 w-36 xxs:h-36 xxs:w-36 xxxs:h-36 xxxs:w-36 hover:scale-110 duration-150"
            onClick={routeChange}
          />
        </div>
      </section>
    </AnimatedComponents>
  );
}

export default BlogPreview;
