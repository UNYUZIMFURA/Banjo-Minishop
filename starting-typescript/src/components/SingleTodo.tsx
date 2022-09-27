import React from "react";
import "../styles.css";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { MdOutlineFileDownloadDone } from "react-icons/md";
import { Todo } from "./model";
import TodoList from "./TodoList";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <form className="single-todo">
      {todo.isDone ? (
        <s className="single-todo-text">{todo.todo}</s>
      ) : (
        <span className="single-todo-text">{todo.todo}</span>
      )}
      <div>
        <span className="icon">
          <FiEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <RiDeleteBin4Fill />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdOutlineFileDownloadDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
