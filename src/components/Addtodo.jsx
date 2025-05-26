import styles from "./Addtodo.module.css";
import { useState } from "react";
import { BiSolidMessageAdd } from "react-icons/bi";
function Addtodo({ onnewitem }) {
  const [todoname, settodoname] = useState("");
  const [duedate, setduedate] = useState("");

  const handlenamechange = (event) => {
    settodoname(event.target.value);
  };
  const handledatechange = (event) => {
    setduedate(event.target.value);
  };

  const handleaddbutton = () => {
    onnewitem(todoname, duedate);
    setduedate("");
    settodoname("");
  };

  return (
    <div className={`row ${styles.row - 1}`}>
      <div className={`col-6 ${styles.inputchange}`}>
        <input
          type="text"
          placeholder="Enter ToDo Here"
          value={todoname}
          onChange={handlenamechange}
        />
      </div>
      <div className={`col-4 ${styles.inputchange}`}>
        <input type="date" value={duedate} onChange={handledatechange} />
      </div>
      <div className={`col-2  ${styles.hi}`}>
        <button
          type="button"
          className={`btn btn-success ${styles.butn}`}
          onClick={handleaddbutton}
        >
          <BiSolidMessageAdd></BiSolidMessageAdd>
        </button>
      </div>
    </div>
  );
}
export default Addtodo;
