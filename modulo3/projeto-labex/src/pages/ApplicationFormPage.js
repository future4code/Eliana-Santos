import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BodyApplication, ButtonsCreate, CardCreate, Form, TitleText } from "../styled/applicationFormStyled";
import useRequestData from '../hooks/useRequestData'
import { URL_BASE } from '../constants/url'

export default function ApplicationFormPage() {
    const [countries, setCoutries] = useState([])
    const history = useHistory()
    const trips = useRequestData(`${URL_BASE}/trips`, []).trips || []

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

    useEffect(() => {
        getCountries();
    }, []);
    

    return (
        <BodyApplication>
            <CardCreate>
                <TitleText>
                    <h1>Inscreva-se para uma viagem</h1>
                </TitleText>
                <Form>
                    <select>
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
                        title="O nome da viagem deve ter no mínimo 5 caracteres"
                        pattern="^.{5,}" />

                    <input
                        placeholder="Idade"
                        type="number"
                        name="age"
                        required
                        min="18"
                    />

                    <input
                        placeholder="Texto de Candidatura"
                        name="applicationText"
                        required
                        pattern="^.{30,}"
                        title="O nome deve ter no mínimo 30 caracteres"
                    />
                    <input
                        placeholder="Profissão"
                        name="profession"
                        required
                        pattern="^.{10,}"
                        title="O nome deve ter no mínimo 10 caracteres"
                    />
                    <select placeholder="País" name="coutry" requerid>
                        <option disabled selected>Escolha um país</option>
                        {countries.map((country) => {
                            return <option value={country.nome.abreviado} >{country.nome.abreviado}</option>
                        })}
                    </select>

                    <ButtonsCreate>

                        <Button
                            variant="outlined"
                            type="submit"
                        >Enviar
                        </Button>

                        <Button
                            onClick={goBack}
                            variant="outlined"
                        >Voltar
                        </Button>

                    </ButtonsCreate>
                </Form>


            </CardCreate>
        </BodyApplication>
    )
}