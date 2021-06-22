import Counter from './Components/counterApp';
import './App.css';
import React, {useState} from 'react';
import PersistentDrawerRight from './Components/drawer';
import Lockr from 'lockr';



function App() {
  const [state, setState] = useState({
    minions: undefined ? Lockr.get('minions') : 0,
    counter: undefined ? Lockr.get('counter') : 0,
    minionSupervisors: undefined ? Lockr.get('minionSupervisors') : 0,
    minionManagers: undefined ? Lockr.get('minionManagers') : 0,
    grandmas: undefined ? Lockr.get('grandmas') : 0,
    dads: undefined ? Lockr.get('dads') : 0,
    aliens: undefined ? Lockr.get('aliens') : 0,
    angels: undefined ? Lockr.get('angels') : 0,
  });
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
