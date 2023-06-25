import Title from "../utils/Title";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

function BlogPreview() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/blog";
    navigate(path);
  };

  return (
    <>
      <section id="blog">
        <div className="flex items-center justify-center flex-col text-center h-screen">
          <Title>Blog Under Construction</Title>
          <Icon
            icon="fluent-emoji:construction"
            className="h-36 w-36 xxs:h-36 xxs:w-36 xxxs:h-36 xxxs:w-36 hover:scale-110 duration-300"
            onClick={routeChange}
          />
        </div>
      </section>
    </>
  );
}

export default BlogPreview;
