import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav.js';
import Article from './Article.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
      <Nav />
      <Article />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
