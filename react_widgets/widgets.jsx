import React from 'react';
import ReactDOM from 'react-dom';
import TestWidget from './test_widget';
import Clock from './frontend/clock';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // debugger
  // ReactDOM.render(<TestWidget />, root);
  ReactDOM.render(<Clock />, root);

  // debugger
});