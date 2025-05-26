import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import TodoItems1 from "./components/TodoItems1";
import Welcomemsg from "./components/Welcomemsg";
import "./App.css";
import { useState } from "react";
function App() {
  // const initialtodoitems = [
  //   {
  //     name: "Buy milk",
  //     date: "23/09/2004",
  //   },
  //   {
  //     name: "G0 to Colleg",
  //     date: "3 / 04 / 2025",
  //   },
  //   {
  //     name: "Drink Coffee",
  //     date: "9/07/2023",
  //   },
  // ];
  const [todoitems, settodoitems] = useState([]);

  const handlenewitem = (itemname, itemduedate) => {
    const newtodoitems = [
      ...todoitems,
      {
        name: itemname,
        date: itemduedate,
      },
    ];
    settodoitems(newtodoitems);
  };

  const handledeleteitem = (todoitemname) => {
    const newtodoitems = todoitems.filter((item) => item.name != todoitemname);
    settodoitems(newtodoitems);
  };

  return (
    <center className="todo-container">
      <Appname></Appname>
      <Addtodo onnewitem={handlenewitem}></Addtodo>
      {todoitems.length === 0 && <Welcomemsg></Welcomemsg>}
      <TodoItems1
        todoitems={todoitems}
        ondeleteclick={handledeleteitem}
      ></TodoItems1>
    </center>
  );
}

export default App;
