import './App.css';
import React from 'react';

function App() {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState(0);

  const display = (symbol) => {
    setInput(prev => prev + symbol);
    if (input[input.length - 1] === "=") {
      if (/[0-9.]/.test(symbol)) {
        setInput(symbol);
      } else {
        setInput(output + symbol);
      }
    }
  };

  const calculate = () => {
    setOutput(eval(input));
    setInput(prev => prev + "=");
  }

  const allClear = () => {
    setInput('');
    setOutput(0);
  }

  return (
    <div className="App">
      <div id='calculator'>
        <input type='text' id='display' value={input} placeholder="0" disabled></input>
        <div id='total'>{output}</div>
        <div id='buttons'>
          <div onClick={allClear} className="button" id='clear'>AC</div>
          <div onClick={() => display("/")} className="button" id='divide'>/</div>
          <div onClick={() => display("*")} className="button" id='multiply'>x</div>
          <div onClick={() => display("7")} className="button" id='seven'>7</div>
          <div onClick={() => display("8")} className="button" id='eight'>8</div>
          <div onClick={() => display("9")} className="button" id='nine'>9</div>
          <div onClick={() => display("-")} className="button" id='subtract'>-</div>
          <div onClick={() => display("4")} className="button" id='four'>4</div>
          <div onClick={() => display("5")} className="button" id='five'>5</div>
          <div onClick={() => display("6")} className="button" id='six'>6</div>
          <div onClick={() => display("+")} className="button" id='add'>+</div>
          <div onClick={() => display("1")} className="button" id='one'>1</div>
          <div onClick={() => display("2")} className="button" id='two'>2</div>
          <div onClick={() => display("3")} className="button" id='three'>3</div>
          <div onClick={() => display("0")} className="button" id='zero'>0</div>
          <div onClick={() => display(".")} className="button" id='decimal'>.</div>
          <div onClick={calculate} className="button" id='equals'>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
