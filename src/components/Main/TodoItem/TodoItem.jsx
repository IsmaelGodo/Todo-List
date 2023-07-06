import React from "react";

const TodoItem = ({task, deleteTask, resetTask }) => {


return <article>
  <span>{task}</span>
  <button onClick={deleteTask}>Borrar</button>
  
  
    </article>;
  
  };

export default TodoItem;
