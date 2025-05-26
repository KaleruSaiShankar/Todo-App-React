import styles from "./Todoitem.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
function Todoitem({ todoName, todoDate, ondeleteclick }) {
  return (
    <div className={`row ${styles.row1}`}>
      <div className="col-6">{todoName}</div>
      <div className="col-4">{todoDate}</div>
      <div className="col-2 hi">
        <button
          type="button"
          className={`btn btn-danger ${styles.butn}`}
          onClick={() => ondeleteclick(todoName)}
        >
          <RiDeleteBin5Fill></RiDeleteBin5Fill>
        </button>
      </div>
    </div>
  );
}
export default Todoitem;
