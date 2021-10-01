import styled from "styled-components";

export const Tabl=styled.table`
min-width: 700px;
  margin: 0 auto 70px;
  font-family: 'Roboto', Sans-Serif;
  font-size: 14px;
  color: #212121;
  border-collapse: collapse;
  text-align: center;
box-shadow: -2px 0px 10px 5px rgba(0,0,0,0.86);
th {
  width: 350px;
  height: 35px;
  padding: 10px 20px;
  border-style: solid;
  border-width: 0 1px 1px 0;
  text-align: center;
  font-weight: 600;
  color: #ffffff;
  border-color: #ffffff;
  background: black;
  text-transform: uppercase;
}
td {
  width: 250px;
  height: 55px;
  padding: 10px 20px;
  border-left: 1px solid #cfcdcd;
  border-right: 1px solid #cfcdcd;
  color: black;
}
.type{
      text-transform:capitalize;
      font-weight:700;
}
tbody:nth-child(even) {
  background-color: rgb(213, 215, 255);
}
`;