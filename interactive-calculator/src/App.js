import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Logo from './components/Logo'
import Button from './components/Button';
import Screen from './components/Screen';
import ClearButton from './components/ClearButton';
import { evaluate } from 'mathjs';
import { useState } from 'react';


function App() {

  const [input, setInput] = useState('');

  function addToInput(val) {
    setInput(input + val);
  };

  const calculate = () => {
    try{
      if (input) {
        setInput(evaluate(input));
      } else{
        alert('Please enter a valid expression');
      } 
    }
    catch(err) {
      setInput('');
    }  
  };



  return (
    <div className="App">
      <Logo
        image={freeCodeCampLogo}
      />
      <div className='calculator-container'>
        <Screen 
          input={input}
        />
        <div className='row'>
          <Button clicManage={addToInput}>1</Button>
          <Button clicManage={addToInput}>2</Button>
          <Button clicManage={addToInput}>3</Button>
          <Button clicManage={addToInput}>+</Button>
        </div>
        <div className='row'>
          <Button clicManage={addToInput}>4</Button>
          <Button clicManage={addToInput}>5</Button>
          <Button clicManage={addToInput}>6</Button>
          <Button clicManage={addToInput}>-</Button>
        </div>
        <div className='row'> 
        <Button clicManage={addToInput}>7</Button>
        <Button clicManage={addToInput}>8</Button>
        <Button clicManage={addToInput}>9</Button>
        <Button clicManage={addToInput}>*</Button>
        </div>
        <div className='row'>
        <Button clicManage={calculate}>=</Button>
        <Button clicManage={addToInput}>0</Button>
        <Button clicManage={addToInput}>.</Button>
        <Button clicManage={addToInput}>/</Button>
        </div>
        <div className='row'>
          <ClearButton
            clearManage = {() => setInput('')}
          >Clear</ClearButton>
        </div>
        
      </div>
    </div>
  );
}

export default App;
