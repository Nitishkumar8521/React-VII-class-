import "./App.css";
import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);
  // {current : input}

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="App">
      {/* first of all we have to set ref value. */}
      {/* after that we have to set (focus) */}
      <input id="inp" ref={inputRef} /> 
      <button onClick={handleClick}>FOCUS ON THE INPUT</button>
    </div>
  );
}