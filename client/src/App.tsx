import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1>Count: {count}</h1>
      <div className="flex gap-1.5 my-4">
        <Button onClick={() => dispatch(decrement())}>
          Click me decrement
        </Button>
        <Button onClick={() => dispatch(increment())}>
          Click me decrement
        </Button>
      </div>
    </div>
  );
}

export default App;
