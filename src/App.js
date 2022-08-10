import React, { useState } from 'react';
import "./App.css";
// Component Imports
import Form from './components/Form';
import TodoList from './components/TodoList';
import Todo from './components/Todo';

function App() {
  const [ inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo-app">
      <header>
        <h1>Aaron's Todo App</h1> 
      </header>
      <Form
        inputText={inputText} 
        todos={todos} setTodos={setTodos} 
        setInputText={setInputText} 
      />
      <TodoList 
        todos={todos}
      />
      <Todo 
        todos={todos}
      />
    </div>
  );
}

export default App;
