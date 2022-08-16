import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    // Event Handlers
    // Do I need to put an ID as a parameter for deleteHandler?
    const deleteHandler = () => {
        console.log(todo);
        console.log(todo.id);

        setTodos(todo.filter((el) => el.id !== todo.id));
        setTodos.remove(todos.id);

        // const array=this.state.todos;
        // console.log(`Array: ${array}`)

    }; 

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo; 