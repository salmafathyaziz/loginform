import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
/*import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

/*function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}
ReactDOM.render(<MyForm />, document.getElementById('root'));*/



function MyForm() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label> 
    
      <label>Enter your password:
        <input
          type="password" 
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </label>
    </form>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));