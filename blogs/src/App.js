import React, {useState} from 'react';
import './App.css';

function App() {
  // let posts = '연습중이에여';

  let [글제목, 글제목변경] = useState(['유튜브 추천', '룰루랄라','라랄루룰']);

  return (
    <div className="App">
      <div className="color-nav">
        <div className="main" style={{ color : 'black', fontSize : '30px'}}>연습용 Blog</div>
      </div>
      <div className='list'>
        {/* <h4>{ posts }</h4> */}
        <h3>{글제목[0]}</h3>
        <p>12월 12일 </p>
        <hr/>
      </div>
      <div className='list'>
        {/* <h4>{ posts }</h4> */}
        <h3>{글제목[1]}</h3>
        <p>12월 12일 </p>
        <hr/>
      </div>
      <div className='list'>
        {/* <h4>{ posts }</h4> */}
        <h3>{글제목[2]}</h3>
        <p>12월 12일 </p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
