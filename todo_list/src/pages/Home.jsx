import React, { useState } from "react";
import Button from "../components/ui/Button";
import Modal from "../components/modals/Modal";
import Input from "../components/ui/Input";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [todos, setTodos] = useState([]);

  const [singleTodo, setSingleTodo] = useState({
    title: "",
    isCompleted: null,
  });

  const handleTodoChange = (value) => {
    setSingleTodo((prev) => ({ ...prev, title: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((prev) => [singleTodo, ...prev]);
    setSingleTodo({ title: "", isCompleted: null });
  };
  const closeModal = () => {
    setSingleTodo({ title: "", isCompleted: null });
    setIsOpen(false)

  }

  const handleTodoCheck = (index) => {
    const updatedTodos = [...todos]
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted 
    setTodos(updatedTodos)
  };

  const editTodo = (todo) => {
    
  };

  const deleteTodo = (todo) => {
    setTodos([...todos].filter((_, index) => index != todo));
  };

  return (
    <div>
      <h1 className="dark:text-gray-100">Home</h1>

      <Button onClick={() => setIsOpen(() => true)}>Add Todo</Button>

      <Modal
        isOpen={isOpen}
        title={"Modal Test"}
        onClose={closeModal}
      >
        <form action="" onSubmit={handleSubmit}>
          <Input
            value={singleTodo.title}
            onChange={(e) => handleTodoChange(e.target.value)}
            label="Write Todo"
          ></Input>
          <div className="flex justify-between">
            <Button variant="primary-outline" className="mt-4" type="submit">
              Add Todo
            </Button>
            <Button variant="default-outline" className="mt-4" onClick={closeModal}>
              Cancle
            </Button>
          </div>
        </form>
      </Modal>

      {/* Display Todos */}

      <div>
        {todos.length > 0 ? (
          <>
            {todos.map((todo, index) => (
              <div
                key={index}
                className="flex text-gray-300 item-center my-2 max-w-md mx-auto"
              >
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => handleTodoCheck(index)}
                  id={`todo-${index}`}
                  className="h-5 w-5 mr-4"
                />
                <p
                  className={`flex-grow ${
                    todo.isCompleted ? "text-green-500" : ""
                  }`}
                >
                  {todo.title}
                </p>
                <Button
                  size="sm"
                  className="mr-4"
                  onClick={() => editTodo(index)}
                >
                  Edit
                </Button>

                <Button size="sm" onClick={() => deleteTodo(index)}>
                  Delete
                </Button>
              </div>
            ))}
          </>
        ) : (
          <>
            <h1 className="dark:text-gray-300">No Todos Availble</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
