import React, { useState } from "react";
import { addTodo, deleteTodo, removeTodo } from "../actions/Index";
import { useSelector, useDispatch } from "react-redux";
import style from './Todo.module.css'
const Todo = () => {
  const [input, setInput] = useState(""); 
  const list = useSelector((state) => state.todoReducer.list);

  const dispatch = useDispatch();
  
  return (
    <div className={style.container}>
      <div className={style.input}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="add item"
      />
      <button onClick={() => dispatch(addTodo(input),setInput(""))} className={style.button1}>
        Add
      </button>
      </div>
      <div className={style.show}>
        {list.map((item) => {
          return (
            <div key={item.id} className={style.map}>
              <li>
              <h3>{item.data}</h3>
              </li>
              <button onClick={() => dispatch(deleteTodo(item.id))} className={style.button1}>
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
