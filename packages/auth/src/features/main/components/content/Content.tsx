import React from 'react';
import styled from 'styled-components';
import ContentItem from './ContentItem';



const ContentStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`



function Content () { 
    const arr = [
    {
        id:1,
        count :'주요기능 1',
        title : '뛰어난 지원자 관리 기능',
        subtitle : '효율적인 지원자 관리를 위한 다양한 기능들이 준비되어있습니다.',
        func1 : '대시보드',
        func2 : '알람기능',
        func3 : '일정관리',
        subfunc :'채용 진행 상태를 한눈에 확인할 수 있습니다.',   
        color:'#eff4fe'
    } ,
    {
        id:2,
        count :'주요기능 2',
        title : '간단한 채용 준비',
        subtitle : '적은 비용과 시간으로 채용 준비를 완료할 수 있습니다.',
        func1 : '지원서, 동의서',
        func2 : '채용공고',
        func3 : '채용홈페이지',
        subfunc :'채용에 필요한 지원서, 동의서를 몇 번의 클릭만으로 생성할 수 있습니다.', 
        color:'#effef4'  
    } ,
    {
        id:3,
        count :'주요기능 3',
        title : '다양한 지원자 평가 도구',
        subtitle : '지원자 평가를 위한 다양한 도구가 준비 되어 있습니다.',
        func1 : '면접',
        func2 : '과제',
        func3 : '평가, 코멘트',
        subfunc :'면접 질문과 응답을 기반으로 지원자를 평가',   
        color:'#feefef'
    } ,
    {
        id:4,
        count :'주요기능 4',
        title : '채용 자동화',
        subtitle : '자동화를 통해 반복되는 작업을 줄일 수 있고 지원자에게 빠르게 피드백 할 수 있습니다.',
        func1 : '지원자 알림 자동화',
        func2 : '평가준비 자동화',
        func3 : '일정관리',
        subfunc :' 채용에 필요한 지원서, 동의서를 몇 번의 클릭만으로 생성할 수 있습니다.', 
        color:'#fdfeef'  
    } ,
    {
        id:5,
        count :'주요기능 5',
        title : '커스텀 브랜딩',
        subtitle : '지원자에게 보이는 모든 정보는 회사에 맞게 커스텀 가능합니다',
        func1 : '채용 홈페이지 제작 ',
        func2 : '회사 로고',
        func3 : '커스텀 도메인',
        subfunc :'회사에 맞는 채용 홈페이지 제작 가능',   
        color:'#feeffd'
    } ,
    {
        id:6,
        count :'주요기능 6',
        title : '보안 및 채용절차법',
        subtitle : '보안 및 채용절차법을 지킵니다',
        func1 : '구성원 내 권한 관리',
        func2 : '채용 절차법',
        func3 : '서버, 데이터 보안',
        subfunc :'권한 관리를 통해 민감한 채용 데이터에 대해 내부 보안이 가능',   
        color:'#effdfe'
    } 
]
    return(
        <ContentStyle>
        {arr.map( item=>(
            <ContentItem item={item} key={item.id}></ContentItem>)) }
        </ContentStyle>


    );


}
export default Content;