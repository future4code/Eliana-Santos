import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { ButtonsLogin, LoginPag, TextLogin } from "../styled/loginStyled"
import Logo from "../img/logo3.png"
import axios from "axios";
import { URL_BASE } from "../constants/url";
import useForm from "../hooks/useForm";

export default function LoginPage() {
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })
    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }

    const onSubmitLogin = () => {

        const body = {
            email: form.email,
            password: form.password
        }
        axios.post(`${URL_BASE}/login`, body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                history.push("/admin/trips/list")
            }).catch((error) => {
                console.log(error)
            })
    }

    const effectLogin = (event) => {
        event.preventDefault();
        cleanFields()
    }

    return (
        <LoginPag>
            <img src={Logo} alt='logo' />

            <TextLogin>
                <h2>Login</h2>
            </TextLogin>
            <form onSubmit={effectLogin}>
                <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required />
                <input
                    placeholder="Senha"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    required
                />

                <ButtonsLogin>
                    <div>
                        <Button onClick={goToHome}
                            variant='outlined'
                        >Voltar
                        </Button>
                    </div>
                    <div>
                        <Button
                            onClick={onSubmitLogin}
                            variant='outlined'
                        >Entrar
                        </Button>
                    </div>
                </ButtonsLogin>
            </form>
        </LoginPag >
    )
}