import React from 'react';
import './App.css';
import blueberries from './assets/blueberries.jpg';

const App = () => {
  return (
    <div className="container">
      <h1>React application basic setup</h1>
      <p>
        The setup of this project allows the use of css style sheets, css
        modules, and images.
      </p>
      <h2>dependencies:</h2>
      <ul>
        <li>react</li>
        <li>react-dom</li>
      </ul>
      <h2>devDependencies</h2>
      <ul>
        <li>@babel/core</li>
        <li>@babel/preset-env</li>
        <li>@babel/preset-react</li>
        <li>babel-loader</li>
        <li>css-loader</li>
        <li>html-webpack-plugin</li>
        <li>style-loader</li>
        <li>webpack</li>
        <li>webpack-cli</li>
        <li>webpack-dev-server</li>
      </ul>
      <h2>Images</h2>
      <figure>
        <img src={blueberries} alt="blueberries plant" width="300px" />
        <figcaption>Image from a local file</figcaption>
      </figure>
      <figure>
        <img
          src="https://justfruitsandexotics.com/wp-content/uploads/5b949c21e8444-800x600.jpg"
          alt="raspberries plant"
          width="300px"
        />
        <figcaption>Image from a url</figcaption>
      </figure>
    </div>
  );
};

export default App;
