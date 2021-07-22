import { useState } from 'react';
import './App.css';

const App = () => {
  const [ bColor, setBColor] = useState('red');
  const btnClickHandler = () => {
    setBColor(bColor === 'red' ? 'blue' : 'red');
  };

  return (
    <div className="App">
      <button
        style={{backgroundColor: bColor}}
        onClick={btnClickHandler}
      >
        {`Change to ${bColor === 'red' ? 'blue' : 'red'}`} 
      </button>
      <input type="checkbox" />
    </div>
  );
}

export default App;
