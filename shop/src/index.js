import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { HashRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alertstate = true ;

function reducer2(state = alertstate, action){
  if (action.type === 'alert닫기'){
    state = false;
    return state;
  }else{
    return state;
  }

}

let teststate =   [
  { id : 0, name : '쿠로롱', quan : 2},
  { id : 1, name : '루루룽', quan : 1}
];

function reducer(state = teststate, action){

  if (action.type === '항목추가'){
    let found =state.findIndex((a) => {
      return a.id === action.payload.id;
    });
  
  if (found >= 0){
    let teststatecopy = [...state];
    teststatecopy[found].quan++;
    return teststatecopy;
  } else {
    let teststatecopy = [...state];
    teststatecopy.push(action.payload);
    return teststatecopy;
    }
  } else if (action.type === '수량증가') {
    let teststatecopy = [...state];
    let found = state.findIndex((a) => {
      return a.id === action.payload;
    });
    teststatecopy[found].quan++;
    return teststatecopy;
  } else if (action.type === "수량감소") {
    let teststatecopy = [...state];
    let found = state.findIndex((a) => {
      return a.id === action.payload;
    });
    if (teststatecopy[found].quan <= 0) {
      teststatecopy[found].quan = 0;
    } else {
      teststatecopy[found].quan--;
    }
    return teststatecopy;
  } else {
    return state;
  }
}
let store = createStore(combineReducers({reducer,reducer2}));

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
