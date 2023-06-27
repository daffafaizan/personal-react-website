import { Icon } from "@iconify/react";

function TodolistCard({
  todos,
  setTodos,
  id,
  title,
  content,
}: {
  todos: any;
  setTodos: any;
  id: number;
  title: string;
  content: string;
}) {
  const handleDelete = (id: number) => {
    console.log("CLICKEd");
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <>
      <div className="dark:text-white text-stone-900 w-full max-w-md flex flex-col rounded-xl shadow-lg p-4 hover:scale-105 hover:shadow-cyan-200 hover:dark:shadow-cyan-400 duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="rounded-full w-4 h-4 border border-purple-500"></div>
            <div className="text-md font-bold">{title}</div>
          </div>
          <div className="flex items-center">
            <div
              className="text-gray-500 hover:text-gray-300 cursor-pointer ml-8"
              onClick={() => handleDelete(id)}
            >
              <Icon icon="fa6-solid:trash" className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="mt-4 text-gray-500 font-bold text-sm">{content}</div>
      </div>
    </>
  );
}

export default TodolistCard;
