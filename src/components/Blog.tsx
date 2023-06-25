import Title from "./Title";
import { Icon } from "@iconify/react";

function Blog() {
  return (
    <>
      <section id="blog">
        <div className="flex items-center justify-center flex-col text-center h-screen">
          <Title>Blog Under Construction</Title>
          <Icon
            icon="fluent-emoji:construction"
            className="h-36 w-36 xxs:h-36 xxs:w-36 xxxs:h-36 xxxs:w-36 hover:scale-110 duration-300"
          />
        </div>
      </section>
    </>
  );
}

export default Blog;
