import { Button } from "@material-ui/core";
import React, { useEffect} from "react";
import { useHistory } from "react-router";
import useRequestData from "../hooks/useRequestData";
import { MainCard } from "../styled/listTripsStyled";
import { BodyDetail, CardDetail, MainDetail } from "../styled/tripDetailsStyled";
import { URL_BASE } from '../constants/url'
import axios from "axios";

export default function TripDetailsPage() {
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token === null) {
            history.push('/login')
        }
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`${URL_BASE}/trip/:id`, {
            headers: {
                auth: token

            }
        })
            .then((response) => {
                localStorage.setItem('token', response.data.token)
            }).catch((error) => {

            })
    }, [])




    const tripDetails = useRequestData(`${URL_BASE}/trip/:id`, {})

    const tripDetailsComponents = tripDetails.trips && tripDetails.trips.map((trip) => {
        return <CardDetail>
            <h1>Titulo</h1>

            <MainDetail>
                <p>Nome:{trip.name}</p>
                <p>Descrição:{trip.description}</p>
                <p>Planeta:{trip.planet}</p>
                <p>Duração:{trip.durationInDays}</p>
                <p>Data:{trip.date}</p>
            </MainDetail>



        </CardDetail>
    })


    return (
        <BodyDetail>
            {tripDetailsComponents}
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
                    </MainCard> */}
            <div>
                <Button
                    onClick={goToHome}
                    variant="outlined"
                >Voltar
                </Button>

            </div>
        </BodyDetail>
    )
}