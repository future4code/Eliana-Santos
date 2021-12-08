import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { MainCard } from "../styled/listTripsStyled";
import { BodyDetail, CardDetail, MainDetail } from "../styled/tripDetailsStyled";

export default function TripDetailsPage() {
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }


    return (
        <BodyDetail>
            <CardDetail>
                <h1>Titulo</h1>

                <MainDetail>
                    <p>Nome:</p>
                    <p>Descrição:</p>
                    <p>Planeta:</p>
                    <p>Duração: </p>
                    <p>Data:</p>
                </MainDetail>
                <div>
                    <Button
                        onClick={goToHome}
                        variant="outlined"
                    >Voltar
                    </Button>

                </div>

                <h1>Candidatos Pendentes</h1>

                <MainCard>
                    <p>Nome:</p>
                    <p>Profisão:</p>
                    <p>Idade:</p>
                    <p>País: </p>
                    <p>Texto de Candidatura:</p>
                    <Button
                        variant="outlined"
                    >Aprovar
                    </Button>
                    <Button
                        variant="outlined"
                    >Reprovar
                    </Button>
                </MainCard>

            </CardDetail>
        </BodyDetail>
    )
}