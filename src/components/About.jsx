import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about">
      {/* Hero */}
      <div className="about-hero">
        <h1>About This Project</h1>
        <p>
          Learn how modern React applications manage state and routing using
          Redux Toolkit and React Router.
        </p>
      </div>

      {/* What You Learn */}
      <div className="about-section">
        <h2>What You Will Learn</h2>

        <div className="learn-grid">
          <div className="learn-card">
            <h3>Redux Toolkit</h3>
            <p>
              Understand global state management, slices, reducers, and how
              actions update your UI in a predictable way.
            </p>
          </div>

          <div className="learn-card">
            <h3>React Router</h3>
            <p>
              Learn how multi-page navigation works in a single-page React
              application without page reloads.
            </p>
          </div>

          <div className="learn-card">
            <h3>Component Architecture</h3>
            <p>
              Learn how to structure components cleanly for scalability and
              maintainability in real-world projects.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="about-section light">
        <h2>How This App Works</h2>

        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>User clicks Increment or Decrement</p>
          </div>

          <div className="step">
            <span>2</span>
            <p>Redux dispatches an action</p>
          </div>

          <div className="step">
            <span>3</span>
            <p>Reducer updates the global store</p>
          </div>

          <div className="step">
            <span>4</span>
            <p>React UI re-renders automatically</p>
          </div>
        </div>
      </div>

      {/* Why This Project */}
      <div className="about-section">
        <h2>Why This Project Exists</h2>
        <p className="about-text">
          This project is designed as a learning playground for developers who
          want to move from basic React concepts to real-world application
          architecture. Instead of just reading documentation, you can interact
          with live state updates and routing behavior.
        </p>
      </div>

      {/* Call to Action */}
      <div className="about-cta">
        <h2>Start Exploring</h2>
        <p>Play with the counter, navigate pages, and explore how state flows.</p>
      </div>
    </div>
  );
};

export default About;
