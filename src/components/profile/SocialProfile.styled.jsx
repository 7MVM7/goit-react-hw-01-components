import styled from "styled-components";
export const Container=styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color:  rgb(167, 246, 248);
flex-direction: column;
border-radius: 15px;
max-width: 50%;
margin: auto;

`
export const MyBox=styled.p`
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
font-weight: 700;
`


export const Tag=styled.p`
display: flex;
justify-content: center;
align-items: center;
`
export const Location=styled.p`
display: flex;
justify-content: center;
align-items: center;
`
export const Foto=styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
  border-radius: 50px;
  margin-top: 20px;
  background-color: white;
`
export const Label=styled.ul`
margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style-type: none;
    text-align: center;
    background-color: black;
    font-size: 15px;
font-weight: 700;
    & li {
        display: flex;
        flex-direction: column;
        padding: 15px 0px;
        width: 120px;

        color:white;
        &:nth-child(2n) {
            border-right: 2px solid red;
            border-left: 2px solid red;
        }
    }


`