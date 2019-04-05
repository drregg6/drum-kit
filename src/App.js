// react
import React, { Component } from 'react';
import './App.css';
import DrumKit from './components/DrumKit';
import Header from './components/Header';

// redux
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <DrumKit />
        </div>
      </Provider>
    );
  }
}

export default App;
