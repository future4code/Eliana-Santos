import React, { useEffect, useState } from "react";
import { Button } from '@material-ui/core'
import { useHistory } from "react-router";
import { BodyListTrips, ButtonsTrips, CardTrips, MainCard } from "../styled/listTripsStyled";
import axios from "axios";
import { URL_BASE } from "../constants/url";

export default function ListTripsPages() {
    const [trips, setTrips] = useState([])
    const history = useHistory()
    const goBack = () => {
        history.goBack('/')
    }

    const goToRegister = () => {
        history.push('/trips/application')
    }

    const getTrips = () => {
        axios.get(`${URL_BASE}/trips`)
            .then((response) => {
                setTrips(response.data.trips);
            }).catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getTrips();
    }, []);

    return (
        <BodyListTrips>
            <CardTrips>
                <div>

                    <h1>Lista de Viagens</h1>

                    {
                        trips.map(trip => {

                            return < MainCard >
                                <p>Nome: {trip.name}</p>
                                <p>Descrição: {trip.description}</p>
                                <p>Planeta: {trip.planet}</p>
                                <p>Duração: {trip.durationInDays} </p>
                                <p>Data: {trip.date}</p>
                            </MainCard>

                        })
                    }

                </div>

                <ButtonsTrips>
                    <Button
                        onClick={goBack}
                        variant='outlined'
                    >Voltar
                    </Button>
                    <Button
                        onClick={goToRegister}
                        variant='outlined'
                    >Inscrever-se
                    </Button>

                </ButtonsTrips>

            </CardTrips>

        </BodyListTrips >
    )
}