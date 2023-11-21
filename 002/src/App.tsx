import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handlePlusClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinusClick = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="bg-blue-100 h-screen w-screen flex items-center justify-center">
      <div className="shadow rounded-xl bg-white p-5">
        <div className='text-lg text-gray-500 font-bold mb-9'>React Counter</div>
        <div className='text-center text-6xl text-blue-700 mb-10'>{count}</div>
        <div className='flex justify-center'>
          <button className='w-12 h-12  bg-blue-400 text-lg text-white font-semibold rounded-full hover:bg-blue-500 mr-2' onClick={handlePlusClick}>+</button>
          <button className='w-12 h-12  bg-white text-lg text-blue-400 font-semibold rounded-full border-2 border-blue-400 hover:bg-blue-500' onClick={handleMinusClick}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
