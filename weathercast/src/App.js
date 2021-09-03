import React from 'react';
import {Provider} from 'react-redux';
import storeRedux from './redux/store';
import './App.css';
import MainPage from './components/MainPage/MainPage';

const store = storeRedux();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
