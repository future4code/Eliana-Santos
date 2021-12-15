import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { ToobarStyled } from './styled';
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../../router/coordinator';



const Header = ({ rightButtonText, setRightButtonText }) => {
    const token = localStorage.getItem("token")
    const history = useHistory()

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Login")
            goToLogin(history)
        } else {
            goToLogin(history)
        }
    }
    const goToHome = () => {
        history.push("/")
      } 

    return (

        <AppBar position="static">
            <ToobarStyled>

                <Button onClick={goToHome} color="inherit">LabEddit</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </ToobarStyled>
        </AppBar>

    );
}
export default Header;