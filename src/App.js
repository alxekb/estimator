import React, { useState } from 'react';
import './App.css';

function App() {
  const [implementation, setImplementation] = useState(3);
  const [dependencies, setDependencies] = useState(0);
  const [testing, setTesting] = useState(1);
  const [review, setReview] = useState(1);
  const [release, setRelease] = useState(2);

  const totalComplexity = implementation + dependencies + testing + review + release;

  return (
    <div className="App">
      <h1>Complexity Calculator</h1>
      <form>
        <div className="form-group">
          <label>Implementation Complexity:</label>
          <input type="number" value={implementation} onChange={e => setImplementation(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label>3-rd party Dependencies Complexity:</label>
          <input type="number" value={dependencies} onChange={e => setDependencies(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label>Testing Complexity:</label>
          <input type="number" value={testing} onChange={e => setTesting(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label>Code Review Complexity:</label>
          <input type="number" value={review} onChange={e => setReview(Number(e.target.value))} />
        </div>
        <div className="form-group">
          <label>Release Complexity:</label>
          <input type="number" value={release} onChange={e => setRelease(Number(e.target.value))} />
        </div>
      </form>
      <h2>Total Complexity: {totalComplexity}</h2>
    </div>
  );
}

export default App;
