import React, { useState } from 'react';

const CreateToDoItem = ({ setTodos }) => {
  const [value, setValue] = useState();

  const AddItem = (title) => {
    setTodos((prev) => [{ title, isComplited: false, _id: new Date() }, ...prev]);
    setValue('');
  };
  return (
    <div className="w-full flex items-center mb-5 rounded-2xl bg-gray-700 p-5 text-white mt-20">
      <input
        type="input"
        className="bg-transparent w-full border-none outline-none"
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && AddItem(value)}
        placeholder="Enter todo"
      ></input>
    </div>
  );
};

export default CreateToDoItem;
