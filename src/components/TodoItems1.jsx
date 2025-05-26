import Todoitem from "./Todoitem";
import styles from "./TodoItems1.module.css";
function TodoItems1({ todoitems, ondeleteclick }) {
  return (
    <div className={styles.Itemscontainer}>
      {todoitems.map((item, index) => (
        <Todoitem
          key={index}
          todoName={item.name}
          todoDate={item.date}
          ondeleteclick={ondeleteclick}
        />
      ))}
    </div>
  );
}
export default TodoItems1;
