import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from "styled-components";
import './Detail.scss'
import { 재고context } from './App.js';
import {Nav} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

let Box = styled.div`
    padding : 20px;
    `;

let Title = styled.h3`
    font-size : 25px;
    color : ${ props => props.col }
    `;

function Detail(props) {

  let [inputData, inputData변경] = useState(' ');
  let [alert, alert변경] = useState(false);
  let 재고 = useContext(재고context);
  let [탭, 탭변경] = useState(0);
  let [스위치, 스위치변경] = useState(false);

    useEffect(() => {
        let timer = setTimeout(() => { alert변경(true) }, 5000)
        return () =>{ clearTimeout(timer)}
    },[]);

    let history = useHistory();
    let { id } = useParams();
    let finditem = props.shoes.find(function(item){
        return item.id == id
    });

    return(
        <div className="container">
            <Box>
                <Title col='orange' >상세 페이지</Title>
                <Title className="blue">상세 페이지</Title>
            </Box>

 
            <input onChange={(e)=>{ inputData변경(e.target.value)}} />
            <br/><br/>
        {
          alert === true
          ? ( <div className="my-alert2">
              <p>재고가 얼마 남지 않았습니다.</p>
              </div> )
          : null
        }
       <br/>
        <div className="row">
          <div className="col-md-6">
            <img src="https://github.com/magmom95/interex/blob/main/nike2.JPG?raw=true" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{finditem.title}</h4>
              <p>{finditem.content}</p>
              <p>{finditem.price}원</p>
              <Info 재고={props.재고}></Info>
            <button className="btn btn-danger" onClick={()=>{ 
              
              props.재고변경([9]) ;
              props.dispatch({type : '항목추가', payload : {id:finditem.id, name:finditem.title, quan: 1}});
              history.push('/cart');

              }}>주문하기</button>
            <br/><br/>  
            <button className="btn btn-warning" onClick={() =>{ 
                // history.goBack();
                history.push('/')
                }}>뒤로가기</button> 
            
          </div>
        </div>

        <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false); 탭변경(0)}}>Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={()=>{ 스위치변경(false); 탭변경(1)}}>Option 2</Nav.Link>
          </Nav.Item>
        </Nav>
        <CSSTransition in={스위치} classNames="Anima" timeout={500}>
          <TabContent 탭={탭} 스위치변경={스위치변경}/>
        </CSSTransition>
      </div>
    )
}

function TabContent(props){

  useEffect(()=>{
    props.스위치변경(true);
  });
  
  if (props.탭 === 0){
    return <div> 0번째 내용 </div>
  } else if (props.탭 === 1){
    return <div> 1번째 내용 </div>
  }

}

function Info(props){
  return(
    <p>재고 : {props.재고[0]}</p>
  )
}

function Test2(state) {
  return {
    state : state.reducer,
    state2 : state.reducer2
  }
}

export default connect(Test2)(Detail)