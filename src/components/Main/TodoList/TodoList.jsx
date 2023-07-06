import React from "react";
import { useState, useEffect } from "react";
import TodoItem from "../TodoItem/TodoItem";
import data from './data';

const TodoList = () => {

  const [input, setInput] = useState('');
  const [tareas, setTareas] = useState([]);
  const [timeid, setTimeid] = useState("");
  
  const addTarea = (event) => {

    event.preventDefault();
    const task = event.target[0].value;
    const newTask = { task };
    setTareas([...tareas, newTask]);
  }
  const deleteTask = (i) => {

    const remainingTasks = tareas.filter((elm, j) => i !== j);
    setTareas(remainingTasks);


  }
  const resetTask = () => {
    setTareas(data)
  }
  const clearTask = () => {
    setTareas([])
  }
  
  useEffect(() => { setTareas(data) }, [])
  useEffect(() => {
    clearTimeout(timeid);
    const id = setTimeout(() => { setInput("") }, (3000))
    setTimeid(id);
  }, [input])



  const handleChange = (event) => {
    setInput(event.target.value);
  };





  return <section>
    <h2>TO-DO List</h2>
    {tareas.map((elm, i) => <TodoItem task={elm.task} deleteTask={() => deleteTask(i)} key={i} />)}

    <form onSubmit={addTarea}>
      <input type="text" placeholder="Nueva Tarea" value={input} onChange={handleChange} />
      {input ? (
        <input type="submit" value="ADD" />
      ) : ''}

    </form>
    <button onClick={resetTask}>Reset</button>
    <button onClick={clearTask}>Clear</button>


  </section>;
};

export default TodoList;
