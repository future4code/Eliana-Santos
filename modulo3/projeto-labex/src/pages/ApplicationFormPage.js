import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { BodyApplication, ButtonsCreate, CardCreate, Form, TitleText } from "../styled/applicationFormStyled";


export default function ApplicationFormPage() {
    const history = useHistory()
    const goBack = () => {
        history.goBack("/trips/list")
    }


    return (
        <BodyApplication>
            <CardCreate>
                <TitleText>
                    <h1>Inscreva-se para uma viagem</h1>
                </TitleText>
                <Form>
                    <select>
                        <option disabled selected>Escolha uma viagem</option>
                    </select>
                    <input
                        placeholder="Nome"
                        name="name"
                        title="O nome da viagem deve ter no mínimo 5 caracteres"
                        pattern="^.{5,}$" />

                    <input
                        placeholder="Idade"
                        type="number"
                        name="age"
                        requerid
                        min="18"
                    />

                    <input
                        placeholder="Texto de Candidatura"
                        name="applicationText"
                        requerid
                        pattern="^.{30,}$"
                        title="O nome deve ter no mínimo 30 caracteres"
                    />

                    <input
                        placeholder="Profissão"
                        name="profession"
                        requerid
                        pattern="^.{10,}$"
                        title="O nome deve ter no mínimo 10 caracteres"
                    />
                    <select placeholder="País" name="coutry" requerid>
                        <option disabled selected>Escolha um país</option>

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