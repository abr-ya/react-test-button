import { useState } from 'react';
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
        style={{backgroundColor: bColor}}
        onClick={btnClickHandler}
        disabled={!buttonActive}
      >
        {`Change to ${bColor === 'red' ? 'blue' : 'red'}`} 
      </button>
      <input
        id="button-control"
        type="checkbox"
        onClick={checkboxClickHandler}
      />
      <label htmlFor="button-control">
        Disable button
      </label>
    </div>
  );
}

export default App;
