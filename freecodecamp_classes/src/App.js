
import React from 'react';
import './App.css';
import Testimony from './components/Testimony';
import peopleTestimony from './objects/PeopleTestimony';


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <div className="principal-container">
          <h1>Here is what our alumns say about freeCodeCamp:</h1> 
          {peopleTestimony.map((object, i) => <Testimony peopleTestimony={object} key={i} />)}
        </div>
      </div>
    );
  }

};

export default App;
