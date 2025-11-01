// import React, { useState } from 'react';
// import Header from './components/header/Header';
// import { AddRoutineModal } from './components/addRoutineModal';
// import ServiceList from './components/ServiceList/ServiceList';
// import RoutineCanvas from './components/RoutineCanvas/RoutineCanva';
// import { useRoutines } from './services/useRoutine';
// import './App.css';
import Routine from './pages/home/Routine';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routine />
    </div>
  );
}

export default App;
