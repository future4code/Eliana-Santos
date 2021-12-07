import React from "react";
import Logo from '../img/logo3.png'
import { Button } from '@material-ui/core'
import { Home } from '../styled/homeStyled'
import { useHistory } from 'react-router-dom'

export default function HomePage() {
    const history = useHistory()

    const goToListTrips = () => {
        history.push("/trips/list")
    }
    const goToLogin = () => {
        history.push("/login")
    }

    return (
        <Home>
            <img src={Logo} alt='logo' />
            <div>
                <Button
                    onClick={goToListTrips}
                    variant='outlined'
                >Viagens</Button>
                <Button
                    onClick={goToLogin}
                    variant='outlined'
                >Área Administrativa</Button>
            </div>
        </Home>
    )
}