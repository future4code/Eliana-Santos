import React from "react";
import Logo from '../img/logo3.png'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

const Home = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-content: center;
    margin: 30px;
    padding: 15%;

    img{
        width: 30%;
        border-radius: 50px;
    }

    div{
    display: flex;
    flex-direction: row;
    gap: 10px;

    }
`

export default function HomePage() {



    return (
        <Home>
            <img src={Logo} alt='logo' />
            <div>
                <Button variant='outlined'>Viagens</Button>
                <Button variant='outlined'>Área Administrativa</Button>
            </div>
        </Home>
    )
}