import React, { useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import styled from "styled-components";

let Box = styled.div`
    padding : 20px;
    `;

let Title = styled.h4`
    font-size : 25px;
    `;

function Detail(props) {

    let history = useHistory();
    let { id } = useParams();
    let finditem = props.shoes.find(function(item){
        return item.id == id
    });

;    return(
        <div className="container">
            <Box>
                <Title>상세 페이지</Title>
            </Box>
        <div className="row">
          <div className="col-md-6">
            <img src="https://github.com/magmom95/interex/blob/main/nike2.JPG?raw=true" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{finditem.title}</h4>
              <p>{finditem.content}</p>
              <p>{finditem.price}원</p>
            <button className="btn btn-danger">주문하기</button>
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

export default Detail;