import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { ToobarStyled } from './styled';


const Header = () => {
    return (

        <AppBar position="static">
            <ToobarStyled>

                <Button color="inherit">LabEddit</Button>
                <Button color="inherit">Login</Button>
            </ToobarStyled>
        </AppBar>

    );
}
export default Header;