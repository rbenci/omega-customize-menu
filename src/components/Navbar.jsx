/** @format */

import React, { useEffect, useState } from "react";
import Taskbox from "./Taskbox";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Navbar(props) {
  const [tasks, setTasks] = useState(["Task1", 'Task2', 'Task3']);


  const handleClick = (e) => {
    e.preventDefault();

    const newTask = prompt("Please enter your item: ");
    tasks.push(newTask);

    setTasks([...tasks]);
  };

  return (
    <div className="navbar">
      {tasks.map((t) => {
        return <Taskbox key={t} name={t}/>;
      })}

      <AiOutlinePlusCircle size={50} onClick={handleClick} />
    </div>
  );
}

export default Navbar;
