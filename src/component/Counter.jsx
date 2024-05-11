import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    
    return (
        <div className="counter" style={{ textAlign: "center" }}> {/* Apply inline CSS for text alignment */}
            <h1 style={{ fontSize: "100px", fontFamily: "Arial", color: "blue" }}>Counter</h1> {/* Apply inline CSS for heading */}
            <h1 style={{ fontSize: "100px" }}>{counter}</h1>
            <button onClick={() => setCounter(counter - 1)} disabled={counter === 0} style={{ backgroundColor: counter === 0 ? "grey" : "green", padding: "10px 20px", fontSize: "20px", margin: "10px" }} className="btn1">Decrement</button> {/* Apply inline CSS for button */}
            <button onClick={() => setCounter(0)} style={{ backgroundColor: "red", color: "white", padding: "10px 20px", fontSize: "20px", margin: "10px" }} className="btn2">Reset</button> {/* Apply inline CSS for button */}
            <button onClick={() => setCounter(counter + 1)} style={{ backgroundColor: "blue", color: "white", padding: "10px 20px", fontSize: "20px", margin: "10px" }} className="btn3">Increment</button> {/* Apply inline CSS for button */}
        </div>
    );
}

export default Counter;
