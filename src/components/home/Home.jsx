/* eslint-disable no-self-compare */
import React, { useState } from 'react';
import CreateToDoItem from '../createToDoItem/CreateToDoItem';
import ToDoItem from '../item/ToDoItem';
const data = [
  { title: 'перваяt', isComplited: false, _id: 1 },
  { title: 'вторая', isComplited: true, _id: 2 },
  { title: 'третья', isComplited: false, _id: 3 },
  { title: 'четвертая', isComplited: false, _id: 4 },
  { title: 'пятая', isComplited: true, _id: 5 },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const Change = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t._id === id);
    current.isComplited = !current.isComplited;
    setTodos(copy);
  };
  console.log('мой массив', todos);

  const RemoveItem = (id) => {
    setTodos([...todos].filter((t) => id !== t._id));
  };

  return (
    <div className=" w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-10">TodoList</h1>
      {todos.map((todos) => (
        <ToDoItem key={todos._id} data={todos} Change={Change} RemoveItem={RemoveItem}></ToDoItem>
      ))}
      <CreateToDoItem setTodos={setTodos}></CreateToDoItem>
    </div>
  );
};

export default Home;
