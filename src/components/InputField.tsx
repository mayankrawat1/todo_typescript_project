import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent) => void;
}

const InputFiels: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="input" onSubmit={(event) => handleAdd(event)}>
      <input
        type="text"
        placeholder="Add a task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="button__submit" type="submit">
        ADD
      </button>
    </form>
  );
};

export default InputFiels;
