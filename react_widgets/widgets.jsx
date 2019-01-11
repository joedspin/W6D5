import React from 'react';
import ReactDOM from 'react-dom';
import TestWidget from './test_widget';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<TestWidget />, root);
});