import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store.ts";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  decrementAsync,
} from "../state/counter/counterSlice.ts";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const randomNumber = () => {
    return Math.floor(Math.random() * (9 - 1) + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(randomNumber()))}>
          Increment
        </button>
        <button onClick={() => dispatch(decrementAsync(randomNumber()))}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
