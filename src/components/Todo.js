const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className="todo">
      <div
        className="content"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        <p className="todo-text">{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div className="div-buttons">
        <button className="todo-button" onClick={() => completeTodo(todo.id)}>
          Completar
        </button>
        <button className="todo-button-x" onClick={() => removeTodo(todo.id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default Todo;
