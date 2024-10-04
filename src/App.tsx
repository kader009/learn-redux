import { decreament, increament } from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { RootState } from "./redux/store";

const App = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state : RootState) => state.counter.count)
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex border px-16 py-16 rounded">
        <button onClick={() => dispatch(increament())} className="bg-green-700 p-2 rounded me-2">Increment</button>
        <span className="text-red-600 text-lg">{count}</span>
        <button onClick={() => dispatch(decreament())} className="bg-green-700 p-2 rounded ms-2">Decrement</button>
      </div>
    </div>
  );
};

export default App;
