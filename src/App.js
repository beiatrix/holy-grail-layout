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
          <article>
            <p>MAIN CONTENT</p>
          </article>
          <nav>
            <p>SIDE NAV</p>
          </nav>
          <aside>
            <p>ASIDE</p>
          </aside>
        </main>
        <footer>
          <p>FOOTER</p>
        </footer>
      </div>
    );
  }
}

export default App;
