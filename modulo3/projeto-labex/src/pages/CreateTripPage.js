import { Button} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { BodyCard, Form, TitleText } from "../styled/createTripStyled";



export default function CreateeTripPage() {
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }

    return (
        <BodyCard>

            <TitleText>
                <h1>Criar Viagem</h1>
            </TitleText>

            <Form>

                <input
                    placeholder="Nome"
                    name="name"
                    title="O nome da viagem deve ter no mínimo 5 caracteres"
                    pattern="^.{5,}$" />

                <select
                    placeholder="Planeta"
                    name="planet"
                    requerid>
                    <option disabled selected >Escolha um Planeta</option>
                    <option value="Mercúrio">Mercúrio</option>
                    <option value="Vênus">Vênus</option>
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                    <option value="Jupiter">Jupiter</option>
                    <option value="Saturno">Saturno</option>
                    <option value="Urano">Urano</option>
                    <option value="Neturno">Neturno</option>
                    <option value="Plutão">Plutão</option>
                </select>

                <input
                    placeholder="Data"
                    type="date"
                    name="date"
                    requerid
                    min="2021-12-07" />

                <input
                    placeholder="Descrição"
                    name="description"
                    requerid
                    pattern="^.{30,}$"
                    title="O nome deve ter no mínimo 30 caracteres"
                />

                <input
                    placeholder="Duração de dias"
                    type="number"
                    name="durationInDays"
                    requerid
                    min="50"

                />
                <div>
                    <Button
                        onClick={goBack}
                        variant='outlined'
                    >Voltar
                    </Button>
                    <Button
                        variant='outlined'
                        type="submit"
                    >Criar
                    </Button>
                </div>
            </Form>


        </BodyCard>
    )
}