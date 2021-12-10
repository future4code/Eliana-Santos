import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BodyApplication, ButtonsCreate, CardCreate, Form, TitleText } from "../styled/applicationFormStyled";
import useRequestData from '../hooks/useRequestData'
import { URL_BASE } from '../constants/url'
import useForm from "../hooks/useForm";

const initialForm = {
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    idTrip: ""
}

export default function ApplicationFormPage() {

    const [countries, setCoutries] = useState([])
    const trips = useRequestData(`${URL_BASE}/trips`, []).trips || []
    const [trip, setTrip] = useState({})
    const { form, onChange, cleanFields } = useForm(initialForm)
    const history = useHistory()

    useEffect(() => {
        getCountries();
    }, []);

    const goBack = () => {
        history.goBack("/trips/list")
    }

    const getCountries = () => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/paises')
            .then((response) => {
                setCoutries(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }

    const register = (event) => {
        event.preventDefault()
        axios.post(`${URL_BASE}/trips/${trip}/apply`, form)
            .then((response) => {
                alert("Cadastro efetuado com sucesso!!");
                cleanFields();
            }).catch((error) => {
                console.log(error)
            })
    }

    const onChangeTrip = (event) => {
        setTrip(event.target.value)
    }

    return (
        <BodyApplication>
            <CardCreate>
                <TitleText>
                    <h1>Inscreva-se para uma viagem</h1>
                </TitleText>
                <Form
                    autoComplete="off"
                    onSubmit={register}>
                    <select required onChange={onChangeTrip}>
                        <option disabled selected>Escolha uma viagem</option>
                        {
                            trips.map(trip => {
                                return <option value={trip.id}>{trip.name}</option>
                            })
                        }
                    </select>
                    <input
                        placeholder="Nome"
                        name="name"
                        value={form.name}
                        title="O nome da viagem deve ter no mínimo 5 caracteres"
                        required
                        onChange={onChange}
                        pattern="^.{5,}" />

                    <input
                        placeholder="Idade"
                        type="number"
                        name="age"
                        value={form.age}
                        onChange={onChange}
                        required
                        min={18}
                    />

                    <input
                        placeholder="Texto de Candidatura"
                        name="applicationText"
                        value={form.applicationText}
                        required
                        onChange={onChange}
                        pattern="^.{30,}"
                        title="O nome deve ter no mínimo 30 caracteres"
                    />
                    <input
                        placeholder="Profissão"
                        name="profession"
                        value={form.profession}
                        onChange={onChange}
                        required
                        pattern="^.{3,}"
                        title="O nome deve ter no mínimo 10 caracteres"
                    />
                    <select
                        placeholder="País"
                        onChange={onChange}
                        required
                        name="country"
                        value={form.country}>
                        <option disabled selected>Escolha um país</option>
                        {countries.map((country) => {
                            return <option value={country.nome.abreviado} >{country.nome.abreviado}</option>
                        })}
                    </select>

                    <ButtonsCreate>

                        <Button variant="outlined" type="submit">
                            Enviar
                        </Button>

                        <Button onClick={goBack} variant="outlined">
                            Voltar
                        </Button>

                    </ButtonsCreate>
                </Form>

            </CardCreate>
        </BodyApplication>
    )
}