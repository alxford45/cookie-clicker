import React from "react";
import DOM from "react-dom";

const App: React.FC = () => <div>hello world</div>;
const root = document.getElementById("root");
DOM.render(<App />, root);
