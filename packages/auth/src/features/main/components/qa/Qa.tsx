import React from 'react';
import styled from 'styled-components';
import Title from '../Title';


const QaDiv = styled.div`

    display : flex;
    flex-direction : column;
    align-items:flex-end;
    
    padding : 10vw;
    & div {
        margin : 2rem;
    }
`
const HiTitle =styled.span`
    width : 40rem;
    font-weight:bold;
    border-bottom: 8px solid #6dffcb;
    font-size: 2.5rem;
    
    & span {
        font-size: 3rem;
    }

`

function Qa (){
    return(<QaDiv>
        <Title>원하는 인재를</Title>
        <Title>놓치고 있지 않으신가요?</Title>
        
        <div>
            홈페이지 및 공고 제작, 면접, 과제 준비, 지원서, 동의서 제작, 데이터 보관 및
            폐기 등
        </div>
        <div>
            <HiTitle>
            이런 복잡한 업무들은 가장 중요한
            </HiTitle>
            <br></br>
            <HiTitle>
            <span>지원자</span>에게 집중할 수 없게
            합니다.
            </HiTitle>
        </div>
    </QaDiv>);
}
export default Qa;