import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { BodyAdm, ButtonsAdm, CardTrip, MainAdm, TextAdm } from "../styled/adminHomeStyled";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
import { URL_BASE } from "../constants/url";

export default function AdminHomePage() {
    const [trips, setTrips] = useState([])
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

                {trips.map(trip => {
                    return <CardTrip onClick={goToDetails}>
                        {trip.name}
                        <Button><DeleteIcon /></Button>
                    </CardTrip>

                })
                }
            </MainAdm>

        </BodyAdm>
    )
}