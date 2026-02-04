import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";
import "../css/Home.css";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Redux Counter App</h1>
        <p>Manage your global state easily with Redux Toolkit</p>

        <div className="counter-card">
          <h2>Counter Value</h2>
          <div className="count">{count}</div>

          <div className="buttons">
            <button className="btn primary" onClick={() => dispatch(increment())}>
              Increment
            </button>
            <button className="btn danger" onClick={() => dispatch(decrement())}>
              Decrement
            </button>
          </div>
        </div>
      </div>

      {/* Other Professional Section */}
      <div className="features">
        <h2>Why Use Redux?</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Centralized State</h3>
            <p>All application state lives in one global store.</p>
          </div>

          <div className="feature-card">
            <h3>Predictable</h3>
            <p>State changes are predictable with reducers and actions.</p>
          </div>

          <div className="feature-card">
            <h3>Scalable</h3>
            <p>Perfect for medium to large scale React applications.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
