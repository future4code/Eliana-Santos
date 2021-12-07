import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { ButtonsLogin, LoginPag, TextLogin } from "../styled/loginStyled"
import  Logo  from "../img/logo3.png"

export default function LoginPage() {
    const history = useHistory()
    const goBack = () => {
        history.goBack('/')
    }
    const goToAdminHome = () => {
        history.push("/admin/trips/list")
    }
    return (
        <LoginPag>
            <img src={Logo} alt='logo' />
            <div>
                <TextLogin>
                <h2>Login</h2>
                </TextLogin>
                
                <input
                placeholder="Email"
                type="email"
                name="email"
                requerid />
                <input
                placeholder="Senha"
                type="password"
                name="password"
                requerid 
                />

            </div>
           <ButtonsLogin>
               <div>
                <Button onClick={goBack}
                    variant='outlined'
                >Voltar
                </Button>
                </div>
                <div>
                <Button
                    onClick={goToAdminHome}
                    variant='outlined'
                >Entrar
                </Button>
                </div>
            </ButtonsLogin>

        </LoginPag>
    )
}