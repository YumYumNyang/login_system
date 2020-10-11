import React from 'react';
import styled from 'styled-components';
import BlueButton from '../BlueButton';
import WhiteButton from '../WhiteButton';
import Title from '../Title';
import ButtonDiv from '../ButtonDiv';

const OutroDiv =styled.div`
    background-color:#f8f6f6;
    display :flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    align-content:center;
    padding : 5rem;


`



function Outro (){
    return(<OutroDiv>
        
        <Title>나인하이어와 함께</Title>
        <Title>혁신적인 채용을 경험하세요</Title>
        
       
        <br></br>
        30일동안 체험하시고 결정하세요
        
        <ButtonDiv>
            <BlueButton>30일 무료 사용</BlueButton>
            <WhiteButton>도입 문의 받기</WhiteButton>
        </ButtonDiv>
           
    </OutroDiv>
    );
}
export default Outro;