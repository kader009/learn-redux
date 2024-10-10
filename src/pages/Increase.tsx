import { useEffect, useState } from 'react';

const Increase = () => {
  const [count, SetCount] = useState(0);
  useEffect(() => {
    console.log('Component rendered successfully');
  }, []);

  const btnClick = () => {
    SetCount((Prevcount) => Prevcount + 1);
    SetCount((Prevcount) => Prevcount + 1);
  };

  return (
    <div className="text-center">
      <button className="bg-black text-white rounded p-1" onClick={btnClick}>
        Click me
      </button>
      <p>you clicked {count}</p>
    </div>
  );
};

export default Increase;
