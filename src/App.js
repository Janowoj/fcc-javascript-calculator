import './App.css';

function App() {
  return (
    <div className="App">
      <div id='calculator'>
        <input id='display'></input>
        <div id='buttons'>
          <div id='clear'>AC</div>
          <div id='divide'>/</div>
          <div id='multiply'>X</div>
          <div id='seven'>7</div>
          <div id='eight'>8</div>
          <div id='nine'>9</div>
          <div id='substract'>-</div>
          <div id='four'>4</div>
          <div id='five'>5</div>
          <div id='six'>6</div>
          <div id='add'>+</div>
          <div id='one'>1</div>
          <div id='two'>2</div>
          <div id='three'>3</div>
          <div id='zero'>0</div>
          <div id='decimal'>.</div>
          <div id='equals'>=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
