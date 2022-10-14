import * as React from "react";
import { Checkbox } from "../checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.scss";

export const TodoList = () => {
  const { todoList, updateToDoList } = React.useContext(TodosContext);
  const [toDoList, setList] = React.useState(todoList);

  const handleDelete = (id) => {
    // Fix an ability to delete task
    const newList = todoList.filter((item) => {
      return item.id !== id;
    });
    updateToDoList(newList);
  };

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
    const index = todoList.findIndex((item) => {
      return item.id === id;
    });
    todoList[index].checked = !todoList[index].checked;
    console.log(todoList[index].checked);
    updateToDoList(todoList);
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {toDoList.length ? (
        <div className="todo-list-content">
          {toDoList.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={() => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
