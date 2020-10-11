import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import MenuIcon from '../MenuIcon';
import { MenuOutlined }  from '@ant-design/icons';


const MenuDiv = styled.div`
    display: flex;
    width: 75vw;
    align-items: center;
    
    @media (max-width: 1024px){
        display:flex;
        justify-content:flex-end;
        align-items:flex-end;
        &:hover MenuItem{
           display:block;
        }
    }


`
const Toggle = styled.div`
    
    @media (min-width: 1024px){
        display:none;
        :hover ToggleItem{
            display: none;
        }    
    }
    
        display: block;
        width:3rem;
        height:3rem;
        padding-right: 10rem;
        padding-bottom : 3rem;

        & div div{
            display: none;
        }

        &:hover {
            display: block;
            > div div{
                display:block;
            }
        }
`
    

    


const MenuItem = styled.div`
    color: #373737;
    font-size : 1.57rem;
    padding-left: 2.5rem;

    @media (max-width: 1024px){
        display:none;

    
    }

`
const ToggleList = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:10rem;
    height: 18rem;
 

`
const ToggleItem = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    align-content: center;
    color: #373737;
    font-size : 1.57rem;
    height: 6rem;
    margin-right:3rem;
    

`

const New = styled.div`
    font-weight: bold;
    color: white;
    font-size: 1rem;
    background-color: #1968fc;
    height:50%;
    border-radius: 10%;
    padding : 0.1rem;
    @media (max-width: 1024px){

        display:none;
    }


`



function Menu () {
    return (
        
            <MenuDiv>
                <MenuItem>기능 소개</MenuItem>
                <MenuItem>요금 안내</MenuItem>
                <MenuItem>도입 문의</MenuItem>
                <New>New</New>
                <Toggle>[Menu]
                    <ToggleList>
                        <ToggleItem>기능 소개</ToggleItem>
                        <ToggleItem>요금 안내</ToggleItem>
                        <ToggleItem>도입 문의</ToggleItem>
                    </ToggleList>
                    

                </Toggle>
            </MenuDiv>
       
        
    ); 
}
export default Menu;