import { useState, useEffect } from "react";
import TodoView from "./components/TodoListView";
import axios from "axios";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = () => {
    axios
      .get("http://localhost:8000/api/todo")
      .then((res) => {
        setTodoList(res.data);
      })
      .catch((err) => console.error(err));
  };

  const addTodoHandler = () => {
    axios
      .post("http://localhost:8000/api/todo/", {
        title: title,
        description: desc,
      })
      .then((res) => {
        console.log(res);
        fetchTodos(); // Fetch todos again to update the list
      })
      .catch((err) => console.error(err));
  };

  const deleteTodoHandler = (title) => {
    setTodoList(todoList.filter((todo) => todo.title !== title));
  };

  return (
    <div
      className="container mx-auto mt-4 p-4 bg-white shadow-md rounded-lg"
      style={{ width: "400px" }}
    >
      <h1 className="text-white bg-red-500 p-2 rounded mb-1 text-center">
        Built using Fast API, Mongo DB and React+Vite
      </h1>

      <h1 className="text-white bg-blue-500 p-2 rounded mb-1 text-center">
        Task Manager
      </h1>

      <div className="card-body">
        <h5 className="text-white bg-gray-800 p-2 rounded mb-3 text-center">
          Add Your Task
        </h5>
        <div className="mb-3">
          <input
            className="mb-2 form-control titleIn p-2 border rounded"
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title"
          />
          <input
            className="mb-2 form-control desIn p-2 border rounded"
            onChange={(event) => setDesc(event.target.value)}
            placeholder="Description"
          />
          <button
            className="btn btn-outline-primary mx-2 mb-3 rounded-full font-bold"
            onClick={addTodoHandler}
          >
            Add Task
          </button>
        </div>

        <h5 className="text-white bg-gray-800 p-2 rounded mb-3 text-center">
          Your Tasks 👇
        </h5>
        <div>
          {todoList.length === 0 ? (
            <div className="text-center font-bold">No tasks remaining 🫡</div>
          ) : (
            <TodoView todoList={todoList} onDelete={deleteTodoHandler} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
