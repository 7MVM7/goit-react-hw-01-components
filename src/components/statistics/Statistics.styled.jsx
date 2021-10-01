import styled from "styled-components";

export const Statisticss = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    
    
`;
export const Container = styled.div`
    border:2px solid ;
    border-radius: 10px;
    border-color:blue;
    
`;
export const Title = styled.h2`
    text-align: center;
    text-transform: uppercase;

`;
export const StatList = styled.ul`

    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
`;
export const Item = styled.li`
border-radius: 10px;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  

    height: 100px;
    width: 100px;
`;
export const Label = styled.span`
    margin-bottom: 5px;
    font-size: 20px;
    
`;
export const Percentage = styled.span`
    font-size: 25px;
    font-weight: 700;
`;