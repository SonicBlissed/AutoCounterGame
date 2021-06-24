import Counter from './Components/counterApp';
import './App.css';
import React, {useState} from 'react';
import PersistentDrawerRight from './Components/drawer';
import Lockr from 'lockr';


function App() {
  const [state, setState] = useState({
    minions: Lockr.get('minions') || 0,
    counter: Lockr.get('counter') || 0,
    minionSupervisors: Lockr.get('minionSupervisors') || 0,
    minionManagers: Lockr.get('minionManagers') || 0,
    grandmas: Lockr.get('grandmas') || 0,
    dads: Lockr.get('dads') || 0,
    aliens: Lockr.get('aliens') || 0,
    angels: Lockr.get('angels') || 0,
  });
  console.log(state.counter)


  return (
    <div className="App">
      <header className="App-header">
      <PersistentDrawerRight state={state} setState={setState}/>
      <Counter state={state} setState={setState}/>
      </header>
    </div>
  );
}

export default App;
