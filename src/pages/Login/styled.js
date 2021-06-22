import styled from 'styled-components';

export const LoginBox = styled.div`
background-color:black;
border-radius: 7%;
border-style: solid;
border-color: gray;
padding: 1%;
height: 40%;
width: 40%;
min-height: 150px;
min-width: 300px;
margin: 3%;
font-size: 100%;
margin-top: 10%;
`
export const LoginTitle = styled.label`
height: 30%;
width: 30%;
min-height: 30px;
min-width: 200px;
font-size: 130%;
color:white;
text-align: center;
`
export const Loginbutton = styled.button`
background-color:gray;
border-radius: 7%;
height: 30%;
width: 30%;
font-size: 100%;
text-align: center;
color:white;
`
export const Loginp = styled.p`
height: 100%;
width: 100%;
font-size: 100%;
`
export const Logininput = styled.input`
background-color:whites;
border-radius: 7%;
border-style: solid;
border-color: gray;
height: 30%;
width: 50%;
min-height: 30px;
min-width: 50px;
:hover{
    background-color:whitesmoke;
    font-size: 110%;
    border-radius: 9%;
}
`
export const Line = styled.div`
  height: 1px;
  width:  90%;
  background-color:gray;
  opacity: 0.8;
  border-radius: 100%;
  align-items: center;
  align-content: center;
  align-self: center;
  margin: 10px;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
  flex-direction: ${({ column }) => column || 'row'};
`;

export const Separator = styled.div`
  height: ${({ y }) => y || 10}px;
  width:  ${({ x }) => x || 10}px;
  border-radius: 100%;
`;

