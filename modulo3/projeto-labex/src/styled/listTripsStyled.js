import styled from "styled-components";

export const BodyListTrips = styled.div`
    margin: 30px 0px;
    padding: 0px;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    h1{
     color: slategray;
     text-align: center;
     }
`
export const CardTrips = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    width: 500px;
`   
export const MainCard = styled.div`
    box-shadow: rgb(0 0 0 / 30%) 0px 4px 8px 0px;
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0px;
    max-width: 500px;
    width: 100%;
p{
    gap:5px;
    font-size: 20px;
    color: slategray;
    font-weight: bolder;
}
`
    export const ButtonsTrips = styled.div`
    display:flex;
    flex-direction: row;
    gap:100px;

`