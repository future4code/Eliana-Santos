import styled from 'styled-components'

export const BodyDetail = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    h1{
    color: slategray;
    font-weight: bolder;
    }
`
export const CardDetail = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
`
export const MainDetail = styled.div`
    padding: 10px 20px;
    margin: 10px 0px;
    max-width: 500px;
    width: 100%;
    p{
        font-size: 20px;
        color: slategray;
        font-weight: bolder;
        
    }

`