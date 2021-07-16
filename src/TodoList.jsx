import React, {useState, useEffect} from "react";
import axios from "axios";

const TodoList = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);

  return (
    <div>
      <h3>Todo List</h3>
      {todos &&
        todos.map((todo) => {
          const {id, userId, title} = todo;
          return (
            <div key={id}>
              <h5>{title}</h5>
              <h6>Assigned to user: {userId}</h6>
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
