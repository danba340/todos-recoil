import React from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import useLocalStorage from "../hooks/useLocalStorage";

function AddTodo({}) {
  const [persistedTodoList, setPersistedTodoList] = useLocalStorage(
    "todoList",
    []
  );
  const textState = atom({
    key: "textState", // unique ID (with respect to other atoms/selectors)
    default: "", // default value (aka initial value)
  });
  const [text, setText] = useRecoilState(textState);

  const todoListState = atom({
    key: "todoListState",
    default: persistedTodoList,
  });
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      return;
    }
    setTodoList((oldTodoList) => {
      const newTodoList = [
        ...oldTodoList,
        {
          text,
          isComplete: false,
        },
      ];
      setPersistedTodoList(newTodoList);
      return newTodoList;
    });
    setText("");
  };
  const onChange = (event) => {
    setText(event.target.value);
  };
  return (
    <form className="pb4 ph2">
      <input type="text" value={text} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </form>
  );
}

export default AddTodo;
