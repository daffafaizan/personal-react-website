import AnimatedComponents from "../ui/AnimatedComponents";
import Title from "../utils/Title";
import { useState } from "react";

interface item {
  id: number;
  text: string;
  completed: boolean;
}

export const SimpleTodolist: React.FC = () => {
  const [todos, setTodos] = useState<item[]>([
    { id: 1, text: "Learn Typescript with Daffa", completed: false },
    { id: 2, text: "Build Todo List App", completed: false },
  ]);

  const [input, setInput] = useState<string>("");

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const handleClick = () => {
    const newTodo: item = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <AnimatedComponents>
      <div
        id="SimpleTodolist"
        className="flex flex-col items-center justify-center h-screen py-20"
      >
        <Title>Todo List</Title>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Add todo item"
          className="h-2 bg-white border-2 p-5 rounded-md mt-10"
          onChange={(e) => setInput(e.currentTarget.value)}
        />
        <button
          className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-900 to-cyan-400 drop-shadow-md hover:scale-110 duration-300 my-5"
          onClick={handleClick}
        >
          Add
        </button>
      </div>
    </AnimatedComponents>
  );
};
