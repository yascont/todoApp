import { useState } from "react";

const Add = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");

  const handleAdding = (e) => {
    e.preventDefault();
    setTaskList([...taskList, input]);
    setInput("");
  };

  return (
    <>
      <form className="flex flex-row items-center gap-3">
        <input
          className="border rounded-lg py-1.5 px-2.5 text-lg"
          type="text"
          placeholder="add your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-violet-400 text-white py-2 px-3.5 rounded-lg
          font-semibold hover:opacity-70"
          onClick={handleAdding}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default Add;
