import { createContext, useState } from "react";

export const TodosContext = createContext({});

export function TodosContextProvider({ children }) {
  const [todoList, setTodoList] = useState([]);

  const updateToDoList = (item) => {
    if (item instanceof Array) {
      setTodoList(item);
    } else {
      setTodoList((oldList) => {
        return [
          ...oldList,
          {
            id: Math.random(),
            label: item,
            checked: false
          }
        ];
      });
    }
  };

  return (
    <TodosContext.Provider value={{ todoList, updateToDoList }}>
      {children}
    </TodosContext.Provider>
  );
}
