import Counter from "./components/Counter.tsx";

const App = () => {
  return (
    <div>
      <h2>ReduxProject</h2>
      <p>
        Game time! Once you start to add or subtract from the counter, try to go
        back to 0! have fun and good luck!
      </p>
      <Counter />
    </div>
  );
};

export default App;
