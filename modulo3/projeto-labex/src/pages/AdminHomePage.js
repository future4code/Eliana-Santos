import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { BodyAdm, ButtonsAdm, CardTrip, MainAdm, TextAdm } from "../styled/adminHomeStyled";
import DeleteIcon from '@material-ui/icons/Delete';

export default function AdminHomePage() {
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }
    const goToCreate = () => {
        history.push("/admin/trips/create")
    }
    const goToDetails = () => {
        history.push("/admin/trips/:id")
    }
    return (
        <BodyAdm>
            <MainAdm>
                <TextAdm>
                    <h1>Painel Adiministrativo</h1>

                </TextAdm>
                <ButtonsAdm>
                    <div>

                        <Button
                            onClick={goToHome}
                            variant='outlined'
                        >Voltar
                        </Button>
                    </div>
                    <div>

                        <Button
                            onClick={goToCreate}
                            variant='outlined'
                        >Criar Viagens
                        </Button>
                    </div>
                    <div>

                        <Button
                            onClick={goToHome}
                            variant='outlined'
                        >Logout
                        </Button>
                    </div>

                </ButtonsAdm>

                <CardTrip>
                    Viagem
                    <Button><DeleteIcon /></Button>
                </CardTrip>
            </MainAdm>

        </BodyAdm>
    )
}