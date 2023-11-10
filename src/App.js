import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let colors = ['pink','gold','white','red','blue','green','yellow']

  const [show,setShow] = useState(true);
  const [color, setColor] = useState('red');

  const toggleShow = () => {
    // setShow(!show)

    let index = colors.indexOf(color);
    setColor(colors[index + 1]);
  }

  return (
    <div className="App-header">
      { show ? 
        <img src={logo} style={{border: `${color} 2px solid`}} className="App-logo" alt="logo" /> 
        : null
      }
      Show is {show ? 'true' : 'false'};
      <button onClick={toggleShow} >Toggle</button>
    </div>
  );
}

export default App;
