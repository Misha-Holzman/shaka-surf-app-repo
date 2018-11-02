import React from 'react';

export default ({ children }) => (
  <header className="hero is-small is-info">
    <div className="hero-body">
      <div className="container">
        <h1 className="title is-size-1">Task Manager</h1>
        { children }
      </div>
    </div>
  </header>
);
