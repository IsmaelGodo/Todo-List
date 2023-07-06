import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoList from './TodoList';



const Main = () => {
  return <main>
    <Routes>
      <Route path="/" element={<TodoList/>}/>

    </Routes>
    


  </main>;
};

export default Main;