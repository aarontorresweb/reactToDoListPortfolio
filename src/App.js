import React, { useState, useEffect } from 'react';
import "./App.css";
// Component Imports
import Form from './components/Form';
import TodoList from './components/TodoList';
// import Todo from './components/Todo';

function App() {
  // State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // USE EFFECT 
  useEffect(() => {
    console.log('useEffect test')
    filterTodos();
  }, [todos, status])

  // Functions
  const filterTodos = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  console.log(filteredTodos);

  return (
    <div className="todo-app">
      <header>
        <h1>AT's Basic Todo App :)</h1><br></br>
      </header>
      <Form
        inputText={inputText}
        todos={todos} setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
