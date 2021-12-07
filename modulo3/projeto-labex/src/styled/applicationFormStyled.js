import styled from "styled-components";

export const BodyApplication = styled.div`
    margin: 30px 0px;
    padding: 0px;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
   `
export const CardCreate = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 500px;
`
export const TitleText = styled.div`
    color:slategray;
    margin-bottom: 20px;
`
export const Form = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 500px;
    select{
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0px 0px 15px;
    }
    input{
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0px 0px 15px;
    }

`
export const ButtonsCreate = styled.div`
    display:flex;
    flex-direction: row;
    gap:100px;
`