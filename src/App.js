import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <a href="">Nav Left</a>
          <a href="">Nav Right</a>
        </header>
        <main>
          <article>MAIN CONTENT</article>
          <nav>SIDE NAV</nav>
          <aside>ASIDE</aside>
        </main>
        <footer>FOOTER</footer>
      </div>
    );
  }
}

export default App;
