import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    // JS function to handle the input.
    const handleInput = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handleSubmit')
        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ])
        setInputText('')
    };

    return (
        <form>
            <input
                value={inputText}
                onChange={handleInput}
                type="text"
                className="todo-input" />
            <button
                onClick={handleSubmit}
                className="todo-button"
                type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;