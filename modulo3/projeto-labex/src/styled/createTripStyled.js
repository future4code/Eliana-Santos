import styled from "styled-components";

export const BodyCard = styled.div`
    margin: 30px 0px;
    padding: 0px;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;`

    export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;

input{
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0px 0px 15px;
}
select{
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0px 0px 15px;
}
div{
    display: flex;
    flex-direction: row;
    gap: 70px;
    justify-content: center;
}
`
export const TitleText = styled.div`
 color:slategray;
  margin-bottom: 20px;

`