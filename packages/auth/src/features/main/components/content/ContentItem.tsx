import React from 'react';
import styled from 'styled-components';



const ItemSection = styled.section`
    display:flex;
    width: 80vw;
    justify-content: center;
    align-items: flex-start;
    padding-top : 40vh;
`



const Pic = styled.div`
    height: 40vw;
    width: 43vw;
    background-color :#f3f3f3;
    box-shadow : 0px 3px 6px -4px rgba(0, 0, 0, 0.12), 0px 6px 16px 0px rgba(0, 0, 0, 0.08), 0px 9px 28px 8px rgba(0, 0, 0, 0.05) ;
    
`

const ItemDiv = styled.div`

    width: 40vw;
    padding: 3rem;
   

`
const Count = styled.span`
    background-color: #000000;
    color: white;
    font-weight: bold;
    padding : 0.5rem;
    font-size: 1.5rem;
    border-radius: 2px;
`
const Title = styled.div`
    font-size: 3rem;
    font-weight: bold;
    color:#000000;
    padding-top: 2rem;
    padding-bottom: 2rem;
    

    
`
const SubTitle = styled.div`
    color:#373737;
    font-size:1.5rem;
    font-weight:lighter;
`
const Detail = styled.div`
    color:#525dfc;
    font-size: 1.3rem;
    font-weight:bold;
    padding-top: 0.8rem;
    padding-bottom: 2rem;
    
`
const Func1 = styled.div`
    width:35rem;
    color:#373737;
    font-size: 1.5rem;
    font-weight:bold;
    height: 8rem;
    padding: 1.5rem;
    background-color: ${(props)=> props.color || "#fafafa" };

`
const Func2 = styled.div`
    width:35rem;
    background-color: "#fafafa";
    color:#373737;
    font-size: 1.5rem;
    font-weight:bold;
    height: 6rem;padding: 1.5rem;

`
const Func3 = styled.div`
width:35rem;
    background-color: "#fafafa";
        color:#373737;
        font-size: 1.5rem;
        font-weight:bold;
        height: 6rem;
        padding: 1.5rem;`
const SubFunc = styled.span`
    
    font-size:1rem;
    font-weight:lighter;
`


function ContentItem ({item}){
    return(
        <div>
         {item.id%2 ?(
             <ItemSection>
                <Pic></Pic>
                <ItemDiv>
         <Count>{item.count}</Count>
         <Title>{item.title}</Title>
         <SubTitle>{item.subtitle}</SubTitle>
         <Detail>자세히 알아보기 →</Detail>
         <Func1 color={item.color}>{item.func1}<br></br><SubFunc>{item.subfunc}</SubFunc></Func1>
         <Func2>{item.func2}</Func2>
            <Func3>{item.func3}</Func3>
                </ItemDiv>
            </ItemSection>)
           : (<ItemSection>
                     <ItemDiv>
         <Count>{item.count}</Count>
         <Title>{item.title}</Title>
         <SubTitle>{item.subtitle}</SubTitle>
         <Detail>자세히 알아보기 →</Detail>
         <Func1 color={item.color}>{item.func1}<br></br><SubFunc>{item.subfunc}</SubFunc></Func1>
         <Func2>{item.func2}</Func2>
            <Func3>{item.func3}</Func3>
                </ItemDiv>
                <Pic></Pic>
            </ItemSection>)
         }
        
         </div>

    );


}
export default ContentItem;