import styled from "styled-components";

export const BodyAdm = styled.div`
    margin: 30px 0px;
    padding: 0px;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const MainAdm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 500px;
    gap: 20px;
`
export const ButtonsAdm = styled.div`
    display: flex;
    flex-direction: row;
    gap: 70px;
    justify-content: center;

`
export const CardTrip = styled.div`
    display: flex;
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0px;
    align-items: center;
    justify-content: space-between;
    width: 460px;
    font-size: 20px;
    color: slategray;
    font-weight: bolder;
    :hover{
    background-color: lightgray;
    color: gray;
}
`
export const TextAdm = styled.div`
    text-align: center;
    color:slategray;
    margin-bottom: 20px;
`