import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from "styled-components";
import './Detail.scss'

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
            <button className="btn btn-danger" onClick={()=>{ props.재고변경([9]) }}>주문하기</button>
            <br/><br/>  
            <button className="btn btn-warning" onClick={() =>{ 
                // history.goBack();
                history.push('/')
                }}>뒤로가기</button> 
          </div>
        </div>
      </div>
    )
}

function Info(props){
  return(
    <p>재고 : {props.재고[0]}</p>
  )
}
export default Detail;