import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { BodyAdm, ButtonsAdm, CardTrip, MainAdm, TextAdm } from "../styled/adminHomeStyled";
import DeleteIcon from '@material-ui/icons/Delete';
import axios from "axios";
import { URL_BASE } from "../constants/url";
import useProtectedPage from "../hooks/useProtectedPage";

export default function AdminHomePage() {
    const { id } = useParams();
    const [trips, setTrips] = useState([])
    useProtectedPage()
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }

    const goToCreate = () => {
        history.push("/admin/trips/create")
    }

    const goToDetails = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`${URL_BASE}/trip/list`, {
            headers: {
                auth: token
            }
        })
            .then((res) => {

            }).catch((error) => {

            })
    }, [])

    const getTrips = () => {
        axios.get(`${URL_BASE}/trips`)
            .then((response) => {
                setTrips(response.data.trips);
            }).catch((error) => {
                console.log(error)
            })
    }
    const deletTrip = () => {
        const token = localStorage.getItem('token')
        axios.delete(`${URL_BASE}/trips/${id}`, {
            headers: {
                auth: token
            }
        }).then((res) => {
            alert("Viagem deletada com sucesso!")

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
                    return <CardTrip >
                        <Button onClick={() => goToDetails(trip.id)}>{trip.name}</Button>
                        <Button ><DeleteIcon onClick={() => deletTrip()}/></Button>
                    </CardTrip>
                })
                }
            </MainAdm>

        </BodyAdm>
    )
}