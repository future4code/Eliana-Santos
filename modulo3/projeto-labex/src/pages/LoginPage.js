import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { ButtonsLogin, LoginPag, TextLogin } from "../styled/loginStyled"
import Logo from "../img/logo3.png"
import axios from "axios";
import { URL_BASE } from "../constants/url";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }

    const onSubmit = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post(`${URL_BASE}/login`, body)
            .then((res) => {
                history.push("/admin/trips/list")
            }).catch((error) => {
            })
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
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
                    requerid
                    onChange={onChangeEmail} />
                <input
                    placeholder="Senha"
                    type="password"
                    name="password"
                    requerid
                    onChange={onChangePassword}
                />

            </div>
            <ButtonsLogin>
                <div>
                    <Button onClick={goToHome}
                        variant='outlined'
                    >Voltar
                    </Button>
                </div>
                <div>
                    <Button
                        onClick={onSubmit}
                        variant='outlined'
                    >Entrar
                    </Button>
                </div>
            </ButtonsLogin>

        </LoginPag>
    )
}