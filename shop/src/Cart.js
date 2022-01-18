import React from 'react';
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

export default Cart;   