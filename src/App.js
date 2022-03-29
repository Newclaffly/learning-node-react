import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExcercisesList from "./components/excerises-list.component";
import EditExcerise from "./components/edit-excerises.component";
import CreateExcercise from "./components/create-excerises.component";
import CreateUser from "./components/create-users.component";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" exact component={<ExcercisesList/>}></Route>
        <Route path="/edit/:id" component={<EditExcerise/>}></Route>
        <Route path="/create" component={<CreateExcercise/>}></Route>
        <Route path="/user" component={<CreateUser/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
