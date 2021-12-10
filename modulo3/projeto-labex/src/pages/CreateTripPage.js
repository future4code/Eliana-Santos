import { Button } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import { URL_BASE } from "../constants/url";
import useForm from "../hooks/useForm";
import { BodyCard, Form, TitleText } from "../styled/createTripStyled";

const initialForm = {
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: 0
}

export default function CreateTripPage() {
    const history = useHistory()
    const { form, onChange, cleanFields } = useForm(initialForm)

    const goBack = () => {
        history.goBack()
    }

    const creatTrip = () => {
        const token = localStorage.getItem('token')
        axios.post(`${URL_BASE}/trips`, form, {
            headers: {
                auth: token
            }
        }).then((response) => {
            alert("Viagem criada com sucesso!")
            cleanFields()
        }).catch((error) => {
            console.log(error)
        })
    }

    const register = (event) => {
        event.preventDefault()
        creatTrip()
    }

    return (
        <BodyCard>

            <TitleText>
                <h1>Criar Viagem</h1>
            </TitleText>

            <Form onSubmit={register}>

                <input
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    title="O nome da viagem deve ter no mínimo 5 caracteres"
                    pattern="^.{5,}$"
                    required
                    onChange={onChange} />

                <select
                    placeholder="Planeta"
                    name="planet"
                    value={form.planet}
                    onChange={onChange}
                    required>
                    <option disabled selected >Escolha um Planeta</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Jupiter">Jupiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Neturno">Neturno</option>
                    <option value="Plutão">Plutão</option>
                </select>

                <input
                    placeholder="Data"
                    type="date"
                    name="date"
                    value={form.date}
                    required
                    min="2021-12-07"
                    onChange={onChange} />

                <input
                    placeholder="Descrição"
                    name="description"
                    value={form.description}
                    required
                    pattern="^.{30,}$"
                    title="O nome deve ter no mínimo 30 caracteres"
                    onChange={onChange}
                />

                <input
                    placeholder="Duração de dias"
                    type="number"
                    name="durationInDays"
                    value={form.durationInDays}
                    required
                    min="50"
                    onChange={onChange}

                />
                <div>
                    <Button
                        onClick={goBack}
                        variant='outlined'
                    >Voltar
                    </Button>
                    <Button
                        variant='outlined'
                        type="submit"
                    >Criar
                    </Button>
                </div>
            </Form>
        </BodyCard>
    )
}