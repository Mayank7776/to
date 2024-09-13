import style from "./bottom.module.css";

export default function BottomComponent({completedtodos, totalTodos}) {
  return (
    <div className={style.header}>
      <span className={style.item}>COMPLETED TODO : {completedtodos}</span>
      <span className={style.item}>TOTAL TODO : {totalTodos}</span>
    </div>
  );
}
