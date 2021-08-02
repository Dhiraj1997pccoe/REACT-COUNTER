import "./App.css";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app">
            <h1 className={count > 0 ? "positive" : count < 0 ? "negative" : null}>{count}</h1>
            <div className="button_wrapper">
                <button className="circular_button" onClick={() => setCount(count - 1)}>-</button>
                <button className="circular_button" onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    );
}

export default App;
