import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";

export default function TripDetailsPage() {
    const history = useHistory()
    const goToHome = () => {
        history.push("/")
    }


    return (
        <div>
            <Button
                onClick={goToHome}
            >Voltar
            </Button>
        </div>
    )
}