import React from 'react';
import Banner from './components/banner'
import './App.scss';

function App() {

  return (
    <div className="app" >
      <h2 >hello world</h2>
      <div className='app__wrapper'></div>
      <Banner />
      <div className='app_desc'>
        <p className='app_title'>ohyeah</p>
      </div>
    </div>
  )
}

export default App;
