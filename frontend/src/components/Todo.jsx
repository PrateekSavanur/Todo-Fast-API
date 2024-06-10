import axios from "axios";

function TodoItem(props) {
  const deleteTodoHandler = (title) => {
    axios
      .delete(`http://localhost:8000/api/todo/${title}`)
      .then((res) => {
        console.log(res.data);
        props.onDelete(title);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="p-4">
      <p>
        <span className="font-bold underline">{props.todo.title} : </span>{" "}
        {props.todo.description}
        <button
          onClick={() => deleteTodoHandler(props.todo.title)}
          className="btn btn-outline-danger my-2 mx-2 rounded-full text-red-500 border-red-500 border-2"
        >
          X
        </button>
        <hr className="my-2" />
      </p>
    </div>
  );
}

export default TodoItem;
