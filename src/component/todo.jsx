import { useState } from "react";
import Navbar from "./nav";
import Item from "./item";
import BottomComponent from "./bottomcomp";
import style from "./todo.module.css";

export default function Todo() {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });
  const [todos, setTodos] = useState([]);
  const totalTodos = todos.length;
  const completedtodos = todos.filter((todo) => todo.done).length;
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  function handlechange(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <div className={style.body}>
      <Navbar />
      <form onSubmit={handlechange} className={style.form}>
        <input
          className={style.input}
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          placeholder="Enter Todo Task... 😃"
          required
        />
        <button className={style.add} type="submit">
          Add
        </button>
      </form>
      {sortedTodos.map((item) => (
        <Item key={item.name} item={item} todos={todos} settodos={setTodos} />
      ))}
      <br />
      <BottomComponent
        completedtodos={completedtodos}
        totalTodos={totalTodos}
      />
    </div>
  );
}
