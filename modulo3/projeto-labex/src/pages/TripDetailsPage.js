import { Button } from "@material-ui/core";
import React from "react";
import { useHistory, useParams } from "react-router";
import useRequestData from "../hooks/useRequestData";
import { MainCard } from "../styled/listTripsStyled";
import { BodyDetail, CardDetail, MainDetail } from "../styled/tripDetailsStyled";
import { URL_BASE } from '../constants/url'
import axios from "axios";

export default function TripDetailsPage() {

    const { id } = useParams();
    const history = useHistory()
    const trip = useRequestData(`${URL_BASE}/trip/${id}`, {}).trip || {};

    const decideCandidate = (event) => {

        const body = {
            approve: event.approve
        }

        axios.put(`${URL_BASE}/trips/${id}/candidates/${event.cadidateId}/decide`, body,
            {
                headers: {
                    auth: localStorage.getItem('token')
                }
            })
            .then(() => {
                alert(`Candidato ${event.approve ? 'aprovado' : 'repovado'} com sucesso!!`);
                history.go(0);
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <BodyDetail>

            <CardDetail>
                <h1>{trip.name}</h1>
                <MainDetail>
                    <p>Nome: {trip.name}</p>
                    <p>Descrição: {trip.description}</p>
                    <p>Planeta: {trip.planet}</p>
                    <p>Duração: {trip.durationInDays}</p>
                    <p>Data: {trip.date}</p>
                </MainDetail>
            </CardDetail>

            <h1>Candidatos Pendentes</h1>

            {trip.candidates?.map(candidate => {
                return <MainCard>
                    <p>Nome:{candidate.name}</p>
                    <p>Profisão:{candidate.profession}</p>
                    <p>Idade:{candidate.age}</p>
                    <p>País: {candidate.country}</p>
                    <p>Texto de Candidatura:{candidate.applicationText}</p>
                    <Button variant="outlined" onClick={() => decideCandidate({ cadidateId: candidate.id, approve: true })}>
                        Aprovar
                    </Button>
                    <Button variant="outlined" onClick={() => decideCandidate({ cadidateId: candidate.id, approve: false })}>
                        Reprovar
                    </Button>
                </MainCard>
            })}

            <div>
                <Button
                    onClick={() => history.goBack()}
                    variant="outlined"
                >Voltar
                </Button>

            </div>
        </BodyDetail>
    )
}