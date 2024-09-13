import style from "./item.module.css";

export default function Item({ item, todos, settodos }) {
  function handleDelete() {
    settodos(todos.filter((todo) => todo !== item));
    console.log(item.name, "deleted");
  }

  function handleClick(name) {
    console.log(item.name, "is clicked");
    const newArr = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    settodos(newArr);
  }
  const className = item.done ? style.completed : "";
  return (
    <div className={style.header}>
      <div className={style.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>{" "}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={style.deleteBtn}
          >
            x
          </button>
        </span>
      </div>
    </div>
  );
}
