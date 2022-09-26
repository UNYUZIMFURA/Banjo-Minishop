import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { Todo } from "./components/model";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("")
    }
  }; 

  console.log(todos)
  return (
    <div className="App">
      <span className="heading">Typescript Todo</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
