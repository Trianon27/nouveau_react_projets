import './App.css';
import Logo from './components/Logo';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import TaskList from './components/TaskList';



function App() {
  return (
    <div className="tasks-aplication">
      <Logo
        image={freeCodeCampLogo}
        />
      <div className='tasks-principal-list'>
        <h1>My tasks</h1>
        <TaskList />

      </div>
    </div>
  );
}

export default App;