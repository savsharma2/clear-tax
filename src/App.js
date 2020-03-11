import React from 'react';
import Theatre from './theatre';

import './App.css';
const numberOfSeatsToBook = 7;

const layout = {
  categories: [{
    name: 'CLUB',
    price: 236.00,
    rows: [{
      name: 'A',
      seats: [
        { number: '1', isBooked: true, extra: 23 },
        { number: '2', isBooked: false },
        { number: '3', isBooked: false },
        { number: '4', isBooked: false },
        { number: '5', isBooked: true },
        { number: '6', isBooked: false },
        { number: '7', isBooked: false },
        { number: '8', isBooked: false },
        { number: '9', isBooked: false },
        { number: '10', isBooked: false }]
    }, {
      name: 'B',
      seats: [
        { number: '1', isBooked: true },
        { number: '2', isBooked: false },
        { number: '3', isBooked: false },
        { number: '4', isBooked: false, extra: 23 },
        { number: '5', isBooked: false },
        { number: '6', isBooked: false, extra: 43 },
        { number: '7', isBooked: false, extra: 23 },
        { number: '8', isBooked: false },
        { number: '9', isBooked: false },
        { number: '10', isBooked: false }
      ]
    }, {
      name: 'C',
      seats: [
        { number: '5', isBooked: true },
        { number: '6', isBooked: false },
        { number: '7', isBooked: false },
        { number: '8', isBooked: false },
        { number: '9', isBooked: false },
        { number: '10', isBooked: false }
      ]
    }]
  }, {
    name: 'EXECUTIVE',
    price: 200.00,
    rows: [{
      name: 'C',
      seats: [
        { number: '4', isBooked: false },
        { number: '5', isBooked: false },
        { number: '6', isBooked: false, extra: 44 },
        { number: '7', isBooked: false },
        { number: '8', isBooked: true },
        { number: '9', isBooked: false },
        { number: '10', isBooked: false }]
    }, {
      name: 'D',
      seats: [
        { number: '4', isBooked: false, extra: 11 },
        { number: '5', isBooked: false },
        { number: '6', isBooked: false, extra: 33 },
        { number: '7', isBooked: false, extra: 45 },
        { number: '8', isBooked: false },
        { number: '9', isBooked: false },
        { number: '10', isBooked: false }
      ]
    }, {
      name: 'E',
      seats: [
        { number: '1', isBooked: true },
        { number: '2', isBooked: false },
        { number: '3', isBooked: false },
        { number: '4', isBooked: false },
        { number: '5', isBooked: false, extra: 10 },
        { number: '6', isBooked: false, extra: 10 },
        { number: '7', isBooked: false },
        { number: '8', isBooked: true },
        { number: '9', isBooked: false },
        { number: '10', isBooked: false }
      ]
    }]
  },]
};

function App() {
  return (
    <div className="app">
      <header className="app-header">
        My Theatre
      </header>

      <Theatre layout={layout} numberOfSeatsToBook={numberOfSeatsToBook}></Theatre>

    </div>
  );
}

export default App;
