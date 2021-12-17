import React, {useState} from 'react';
import './App.css';

function App() {
  /* let posts = '연습중이에여'; */ 

  let [글제목, 글제목변경] = useState(['유튜브 추천', '룰루랄라', '라랄루룰']);
  let [싫어요, 싫어용] = useState(0);
  let [좋아요, 좋아용] = useState(0); /* [state, state 변경함수] */ 
  let [modal, modalChange] = useState(false);
  let [제목, 제목번호] = useState(0);

function 제목변경(){
    let 제목변경 = [...글제목]  /* 1. 기존 state에 카피본을 만들고 <-deepcopy를 함 <- spread 사용 */
    제목변경[0] = '유튜브 현재 추천' /* 2. 카피본에 수정사항 변경 */
    글제목변경(제목변경); /* 3. 변경함수에 () 집어넣기 */
}

function 제목변경2(){
  let 제목변경2 = [...글제목]
  제목변경2[1] = 'pull부터 해라'
  글제목변경(제목변경2);
}

function 제목변경3(){
  let 제목변경3 = [...글제목]
  제목변경3[2] = '어렵다 어려워'
  글제목변경(제목변경3);
}

// function 제목변경4 () {
//     let 제목변경4 = [...글제목]
//     제목변경4[0] = '유튜브 추천'
//     제목변경4[1] = '룰루랄라'
//     제목변경4[2] = '라랄루룰'
//     글제목변경(제목변경4);
// }

// function 제목변경5 () {
//   let 제목변경5 = [...글제목]
//   제목변경5[0] = '유튜브 현재추천'
//   제목변경5[1] = 'pull부터 해라'
//   제목변경5[2] = '어렵다 어려워'
//   글제목변경(제목변경5);

// }

// function 정렬 () {
//   let 정렬 = [...글제목]
//   정렬.sort();
//   글제목변경(정렬);
// }

// function 역정렬() {
//   let 역정렬 = [...글제목]
//   역정렬.reverse();
//   글제목변경(역정렬);
// }

function Modal(props) {
  return(
    <div className='modal'>
        <h2>{props.글제목[props.제목]}</h2>
        <p>연습중이에요</p>
        <p>아하아하</p>
    </div>
  )
}

  return (
    <div className="App">
      <div className="color-nav">
        <div className="main" style={{ color : 'black', fontSize : '30px'}}>연습용 Blog</div>
      </div>
      <div className='list'>
        {/* <h4>{ posts }</h4> */}
        <h3>{글제목[0]} <span onClick={ ()=> {좋아용(좋아요 + 1)}}> 👍 </span> {좋아요} <span onClick={ ()=> {싫어용(싫어요 -1)}}> 👎 </span> {싫어요}</h3>
        <p>12월 12일 </p>
        <button onClick={ 제목변경 }>제목 바뀝니다.</button>
        <hr/>
      </div>
      <div className='list'>
        {/* <h4>{ posts }</h4> */}
        <h3>{글제목[1]}</h3>
        <p>12월 13일 </p>
        <button onClick={ 제목변경2 }>제목 바뀝니다.</button>
        <hr/>
      </div>
      <div className='list'>
        {/* <h4>{ posts }</h4> */}
        <h3 onClick={() =>{ modalChange(!modal)}}>{글제목[2]}</h3>
        <p>12월 14일 </p>
        <button onClick={ 제목변경3 }>제목 바뀝니다.</button>
        <hr/>
      </div>
      {/* <div className='modal'>
        <h2>모달창</h2>
        <p>연습중이에요</p>
        <p>아하아하</p>
      </div> */}
      {/* <Modal/>  */}
      {/* Component화를 통한 HTMl을 깔끔한게 치환 */}
      { 
      modal === true
      ? <Modal 글제목={글제목} 제목={제목}/>
      : null
      }
      <br/>
      {/* <button onClick={ 제목변경4 }>원상태</button>      
      <br/><br/>
      <button onClick={ 제목변경5 }>다 바꾸기</button>
      <br/><br/>
      <button onClick={ 정렬 }>정렬</button>
      <br/><br/>
      <button onClick={ 역정렬 }>역정렬</button> */}
      <button onClick={()=>{ 제목번호(0)}}>버튼1</button>
      <button onClick={()=>{ 제목번호(1)}}>버튼2</button>
      <button onClick={()=>{ 제목번호(2)}}>버튼3</button>
      <br/><br/>
      <button onClick={() =>{ modalChange(!modal)}}>모달창</button>
    </div>
  );
}

export default App;
