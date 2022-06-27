import React, { useContext, useRef } from 'react'
import MastHead from './components/masthead'
import ScrollObserver, { ScrollContenxt } from './utils/scroll-observer';
import './App.scss';

function App() {

  return (
    <ScrollObserver>
      <div className="app">
        <MastHead />
        <div className='box1'>500px</div>
        <div className='box2'>700px</div>
        <div className='box1'>500px</div>
        <div className='box2'>700px</div>
      </div>
    </ScrollObserver>
  )
}

export default App;
