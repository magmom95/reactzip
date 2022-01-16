import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let teststate =   [
  { id : 0, name : '쿠로롱', quan : 2},
  { id : 1, name : '루루룽', quan : 1}
];

function reducer(state = teststate, action){
  if (action.type === '수량증가') {
    
    let copy = [...state];
    copy[0].quan++;
    return copy
  
  } else if (action.type === '수량감소'){

    let copy = [...state];
    copy[0].quan--;
    return copy

  } else {
    return state
  }
  
}
let store = createStore(reducer);

// ReactDOM.render(
//   <React.StrictMode>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
