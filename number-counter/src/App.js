import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manageClick = () => {
    setNumClicks(numClicks + 1); 
  };

  const restartCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
         className='freecodecamp-logo'
         src={freeCodeCampLogo}
         alt='freeCodeCamp logo' />
      </div>
      <div className='main-container'>
        <Counter 
            clicks={numClicks}
          />
          <Button 
            text= 'Click'
            clicbutton = {true}
            manageClick = {manageClick} />
          <Button
            text= 'Restart'
            clicbutton = {false}
            manageClick = {restartCounter} />
      </div>
    </div>
  );
}

export default App;
