import React from 'react';
import s from './App.module.css';
import Aside from './aside/Aside';
import Main from './main/Main';

function App() {
  return (
    <div className={s.app}>
      <Aside />
      <Main />
    </div>
  );
}

export default App;
