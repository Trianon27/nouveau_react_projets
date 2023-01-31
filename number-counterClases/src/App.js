import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import Button from './components/Button';
import Counter from './components/Counter';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numClicks: 0
    };
    this.manageClick = this.manageClick.bind(this);
    this.restartCounter = this.restartCounter.bind(this);
  }

  manageClick() {
    this.setState(({ numClicks}) => ({ numClicks : numClicks + 1 }));
  }

  restartCounter() {
    this.setState({
      numClicks: 0
    });
  }

  render(){
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
              clicks={this.state.numClicks}
            />
            <Button 
              text= 'Click'
              clicbutton = {true}
              manageClick = {this.manageClick} />
            <Button
              text= 'Restart'
              clicbutton = {false}
              manageClick = {this.restartCounter} />
        </div>
      </div>
    );
  }

};








/* function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manageClick = () => {
    setNumClicks(numClicks + 1); 
  };

  const restartCounter = () => {
    setNumClicks(0);
  };

  
} */

export default App;
