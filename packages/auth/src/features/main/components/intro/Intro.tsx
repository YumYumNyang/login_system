import React from 'react';
import styled from 'styled-components';
import BlueButton from '../BlueButton';
import WhiteButton from '../WhiteButton';
import Title from '../Title';
import ButtonDiv from '../ButtonDiv';

const IntroSection = styled.section`
    width : 60vw;
    margin-left: 20vw;
    margin-top : 5vh;
    margin-bottom : 50vh;
    color:#343434;

`

const HiTitle = styled.span`
    border-bottom : 1rem solid rgba(25, 104, 252, 0.5);

`
const SubTitle = styled.div`
    margin-top : 5vh;

    
`

const Info = styled.div`
    padding-top: 20vh;
    font-size: 2.5rem;
    font-weight: lighter;
    
`

function Intro (){
    return(
        <IntroSection>        
            <Title>복잡했던 채용을 
                <br/>
                <HiTitle>간단하게</HiTitle>
            </Title>
            <SubTitle>
                <b>채용 공고, 지원자 관리, 채용절차법</b> 등<br/>
                복잡한 채용을 나인하이어와 <br/>
                간단하게 진행하세요
            </SubTitle>
            <ButtonDiv>
                <BlueButton>30일 무료사용</BlueButton>
                <WhiteButton >소개서 다운받기</WhiteButton>
            </ButtonDiv>
            <Info>
            나인하이어는 채용의 시작부터 끝까지 <br></br>
            채용을 도와드리는 채용 솔루션입니다.<br></br>
            진행되었던 채용정보들은 안전하게 저장 및 폐기 됩니다.
            </Info>
        </IntroSection>
    );

}
export default Intro;