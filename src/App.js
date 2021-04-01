import Counter from './Components/counterApp';
import './App.css';
import React, {useState} from 'react';
import PersistentDrawerRight from './Components/drawer';
import Lockr from 'lockr';



function App() {
  const [state, setState] = useState({
    minions: 0 + Lockr.get('minions'),
    counter: 0 + Lockr.get('counter'),
    minionSupervisors: 0 + Lockr.get('minionSupervisors'),
    minionManagers: 0 + Lockr.get('minionManagers'),
    grandmas: 0 + Lockr.get('grandmas'),
    dads: 0 + Lockr.get('dads'),
    aliens: 0 + Lockr.get('aliens'),
    angels: 0 + Lockr.get('angels'),
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
