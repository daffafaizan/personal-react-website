import AnimatedComponents from "../ui/AnimatedComponents";
import Title from "../utils/Title";
import { useState, useEffect } from "react";
import TodolistCard from "./TodolistCard";
import DialogForm from "./DialogForm";

interface item {
  id: number;
  title: string;
  content: string;
  completed: boolean;
}

export const SimpleTodolist: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [todos, setTodos] = useState<item[]>([
    {
      id: 1,
      title: "Learn Typescript with Daffa",
      content: "Today I learnt typescript",
      completed: false,
    },
    {
      id: 2,
      title: "Build Todo List App",
      content: "Today I built a Todo List App",
      completed: false,
    },
  ]);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem("todos") ?? "{}"));
    const todoItems = JSON.parse(localStorage.getItem("todos") ?? "{}");
    if (todoItems) {
      setTodos(todoItems);
    }
  }, []);

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

  const handleDelete = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleClick = () => {
    const newTodo: item = {
      id: Date.now(),
      title: title,
      content: content,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  };

  return (
    <AnimatedComponents>
      <div
        id="SimpleTodolist"
        className="flex flex-col items-center justify-center md:h-screen lg:h-screen xl:h-screen py-20"
      >
        <Title>Todo List</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
          {todos.map((todo) => (
            <li
              onClick={() => handleDelete(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </li>
          ))}
          {todos.map((todo) => (
            <TodolistCard
              key={todo.id}
              title={todo.title}
              content={todo.content}
            ></TodolistCard>
          ))}
        </div>
        <DialogForm
          ButtonCloseText="Test"
          ButtonText="Add"
          setTitle={setTitle}
          setContent={setContent}
          handleClick={handleClick}
        />
      </div>
    </AnimatedComponents>
  );
};
