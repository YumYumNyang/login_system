
import React from 'react';
import styled from 'styled-components';



const DescDiv = styled.div`
    display: flex;
    padding : 10vw;
`
const Col = styled.div`
    width: 20vw;
    display : flex;
    flex-direction : column;
    & span {
        margin : 1rem;
    }
    

`

function Desc (){ 
    return(
        <DescDiv>
            <Col>
                <span><h2><b>NineHire</b></h2></span>
                <span>make recruitment comfortable</span>
                <span>ⓒ 2019 hackit Inc.</span>
            </Col>
            <Col>
                <span><b>기능 소개</b></span>
                <span>지원자관리</span>
                <span>채용준비</span>
                <span>지원자 평가 도구</span>
                <span>자동화</span>
                <span>커스텀 브랜딩</span>
                <span>보안 및 채용절차법</span>
            </Col>
            <Col>
                <span><b>요금 안내</b></span>
            </Col>
            <Col>
                <span><b>도입 문의</b></span>
            </Col>
        </DescDiv>
    );
}
export default Desc;