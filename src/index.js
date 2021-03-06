import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { Provider } from 'react-redux';
// import reducer from './reducers/reducer'

// const store = createStore(reducer, applyMiddleware(thunk));
// console.log(store.getState());

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,
  <React.StrictMode >
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
