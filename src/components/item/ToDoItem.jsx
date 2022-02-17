import React from 'react';
import Check from './Check';
import { BsTrashFill } from 'react-icons/bs';

const ToDoItem = ({ data, Change, RemoveItem }) => {
  return (
    <div className=" w-95 flex items-center justify-around">
      <div onClick={() => Change(data._id)} className=" w-full flex items-center mb-5 rounded-2xl bg-gray-700 p-5">
        <Check isComplited={data.isComplited}> </Check>
        {data.title}
      </div>
      <BsTrashFill onClick={() => RemoveItem(data._id)} className="pb-5 hover:text-red-700" size={50}></BsTrashFill>
    </div>
  );
};

export default ToDoItem;
