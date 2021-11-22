import styled from 'styled-components'


export const Inicio = styled.header`
background-color: pink;
color: white;

`
export const Adicionar = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 5px;

input{
  width: 50%;
  height: 50%;
}
button{
background: white;
color: black;
height: 50%;
width: 50%;
}

`
export const Botoes = styled.td`
display:flex;
flex-direction: row;
justify-content: flex-end;
gap: 5px;  


`

export const BotaoAdd = styled.button`

background: white;
color: black;
width: 50px;

img{
  width: 50%;
  height: 20px;
  
  
}

`
export const BotaoDel = styled.button`

background: white;
color: black;
height: 10%;
width: 50px;
img{
  width: 50%;
  height: 20px;
  
  
}


`
export const Main = styled.div`
display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    gap: 30px;
`

export const Tabela = styled.table`

  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 50%;
  


td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}


`