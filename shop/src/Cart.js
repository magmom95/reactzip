import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props){
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
            props.state.map((a,i)=>{
              return (
                  <tr key={i}>
                    <td>{a.id}</td>
                    <td>{a.name}</td>
                    <td>{a.quan}</td>
                    <td>
                      <button onClick={()=>{ props.dispatch({ type : '수량증가'})}}>+</button>
                      <button onClick={()=>{ props.dispatch({ type : '수량감소'})}}>-</button>
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

function Test(state) {
  return {
    state : state.reducer,
    state2 : state.reducer2
  }
}

export default connect(Test)(Cart)