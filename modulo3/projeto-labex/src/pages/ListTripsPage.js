import React from "react";
import { Button } from '@material-ui/core'
import { useHistory } from "react-router";
import { BodyListTrips, ButtonsTrips, CardTrips, MainCard } from "../styled/listTripsStyled";


export default function ListTripsPages() {
    const history = useHistory()

    const goBack = () => {
        history.goBack('/')
    }

    const goToRegister = () => {
        history.push('/trips/application')
    }

    return (
        <BodyListTrips>
            <CardTrips>
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
                <div>
                    
                    <h1>Lista de Viagens</h1>

                    <MainCard>
                        <p>Nome:</p>
                        <p>Descrição:</p>
                        <p>Planeta:</p>
                        <p>Duração: </p>
                        <p>Data:</p>
                    </MainCard>

                </div>

            </CardTrips>

        </BodyListTrips>
    )
}