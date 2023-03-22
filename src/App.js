import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="quote-container">
      <div className="App" id='quote-box'>
        <p id="text">quote</p>
        <p id="author">author</p>
        <button id="new-quote">new quote</button>
        <a id="tweet-quote" href={`https://twitter.com/intent/tweet`} target="_blank">Tweet Quote</a>
      </div>
    </div>
  );
}

export default App;
