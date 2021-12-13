import React, {useState} from 'react';
import './App.css';

function App() {
  /* let posts = '연습중이에여'; */ 

  let [글제목, 글제목변경] = useState(['유튜브 추천', '룰루랄라','라랄루룰']);
  let [좋아요, 좋아용] = useState(0); /* [state, state 변경함수] */ 

  function 제목변경(){
      let 제목변경 = [...글제목]  /* 1. 기존 state에 카피본을 만들고 <-deepcopy를 함 <- spread 사용 */
      제목변경[0] = '유튜브 현재 추천' /* 2. 카피본에 수정사항 변경 */
      글제목변경(제목변경); /* 3. 변경함수에 () 집어넣기 */
  }
  
  return (
    <div className="App">
      <div className="color-nav">
        <div className="main" style={{ color : 'black', fontSize : '30px'}}>연습용 Blog</div>
      </div>
      <div className='list'>
        {/* <h4>{ posts }</h4> */}
        <h3>{글제목[0]} <span onClick={ ()=> {좋아용(좋아요 + 1)}}> 👍 </span> {좋아요}</h3>
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
      <button onClick={ 제목변경 }>맨위 글이 바뀝니다.</button>
    </div>
  );
}

export default App;
