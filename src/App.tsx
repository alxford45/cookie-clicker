import React from "react";

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const onClick = () => setCount(x => x + 1);
  return (
    <React.Fragment>
      <div>count</div>
      <button>click me!</button>);
    </React.Fragment>
  );
};

export default App;
