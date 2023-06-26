import AnimatedComponents from "../ui/AnimatedComponents";
import Title from "../utils/Title";

const TodoList = () => {
  return (
    <AnimatedComponents>
      <div
        id="Todolist"
        className="flex flex-col items-center justify-center h-screen py-20"
      >
        <Title>Todo List</Title>
        <button className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-900 to-cyan-400 drop-shadow-md hover:scale-110 duration-300 my-5">
          Create task
        </button>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
            {portfolio.map((project) => (
            <PortfolioItem
              key={project.title}
              title={project.title}
              imgUrl={project.imgUrl}
              stack={project.stack}
              link={project.link}
              target={project.target}
            />
          ))}
          </div> */}
      </div>
    </AnimatedComponents>
  );
};

export default TodoList;
