import React from 'react';
import ReactDOM from 'react-dom';
import Age from './Age';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Age />, div);
});
