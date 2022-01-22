import React, {useEffect, memo} from 'react';
import {Table} from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';

function Cart(props){

    let state = useSelector((state) => state);

    let dispatch = useDispatch();

    return(
        <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>증가</th>
            </tr>
          </thead>
          <tbody>
          { 
            state.reducer.map((a,i)=>{
              return (
                  <tr key={i}>
                    <td>{a.id}</td>
                    <td>{a.name}</td>
                    <td>{a.quan}</td>
                    <td>
                      <button onClick={()=>{ dispatch({ type : '수량증가', payload : a.id})}}>+</button>
                      <button onClick={()=>{ dispatch({ type : '수량감소', payload : a.id})}}>-</button>
                    </td>
                  </tr>
                  )
                })  
              }

          </tbody>
        </Table>
      { props.state2 === true
        ?(<div className='my-alert2'>
          <p>할인 할인</p>
          <button onClick={() => {props.dispatch({type:'alert닫기'})}}>닫기</button>
        </div>)
        : null 
      }

      <Parent 이름="존박" 나이="20"></Parent>
      </div>
    )
}

// function Test(state) {
//   return {
//     state : state.reducer,
//     state2 : state.reducer2
//   }
// }

// export default connect(Test)(Cart)

function Parent(props){
  return (
    <div>
      <Child1 이름={props.존박}/>
      <Child2 나이={props.나이}/>
    </div>
  )
}
function Child1(){
  useEffect( ()=>{ console.log('렌더링됨1') } );
  return <div>1111</div>
}
let Child2 = memo(function(){
  useEffect( ()=>{ console.log('렌더링됨2') } );
  return <div>2222</div>
  // 존박만 부를때 재 랜더링 안됨 
})
export default Cart;   