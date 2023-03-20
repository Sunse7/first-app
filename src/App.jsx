import './App.css';
import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('dark');

  return (
    <div className= {mode}>
      <h1>Hello world</h1>
      <article>
        <button onClick={() => {setMode('light')}}>Light mode</button>
        <button onClick={() => {setMode('dark')}}>Dark mode</button>
      </article>
    </div>
  )
}

export default App
