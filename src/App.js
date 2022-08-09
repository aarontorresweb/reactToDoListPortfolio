import React, { useState } from 'react';
import "./App.css";
// Component Imports
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [ inputText, setInputText] = useState('');
  return (
    <div className="todo-app">
      <header>
        <h1>Aaron's Todo App</h1> 
      </header>
      <Form setInputText={setInputText} />
      <TodoList />
    </div>
  );
}

export default App;
