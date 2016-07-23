import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 days later'];

ReactDOM.render(
  <Voting pair={pair} />,
  document.getElementById('app')
);
