import React from "react";
import "../styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  console.log(todo);
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Pend Tasks"
        className="input-box"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input-submit">Go</button>
    </form>
  );
};

export default InputField;
