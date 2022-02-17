import React from 'react';
import { BsCheck } from 'react-icons/bs';

const Check = ({ isComplited }) => {
  console.log('флаг', isComplited);
  return (
    <div
      className={`mr-5 border-2 rounded-lg ${
        isComplited ? 'bg-pink-400' : ''
      } border-pink-400 w-5 h-5 flex items-center justify-center`}
    >
      {isComplited && <BsCheck size={24} className="text-gray-900"></BsCheck>}
    </div>
  );
};

export default Check;
