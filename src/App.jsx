import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [bColor, setBColor] = useState('red');
  const [buttonActive, setButtonActive] = useState(true);
  const btnClickHandler = () => {
    setBColor(bColor === 'red' ? 'blue' : 'red');
  };
  const checkboxClickHandler = (e) => {
    setButtonActive(!e.target.checked);
  };

  return (
    <div className="App">
      <button
        style={{ backgroundColor: buttonActive ? bColor : 'gray' }}
        onClick={btnClickHandler}
        disabled={!buttonActive}
        type="button"
      >
        {`Change to ${bColor === 'red' ? 'blue' : 'red'}`}
      </button>
      <label htmlFor="button-control">
        <input
          id="button-control"
          type="checkbox"
          onClick={checkboxClickHandler}
        />
        Disable button
      </label>
    </div>
  );
};

export default App;
