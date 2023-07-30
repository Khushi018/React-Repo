import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <h2>khushi Gupta</h2>
    </div>
  );
}

const reactRoot = createRoot(document.getElementById("root"));
reactRoot.render(<App />);

