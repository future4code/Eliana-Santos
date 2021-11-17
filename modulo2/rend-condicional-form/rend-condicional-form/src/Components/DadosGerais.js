import React from 'react';
import styled from 'styled-components';



const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`


const Form = styled.form `
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;

` 




export default class DadosGerais extends React.Component {

    render() {
        return (

            <Container>

                <h2>ETAPA 1 - DADOS GERAIS</h2>


                <Form>
                    Qual o seu nome?
                    <input />
                    Qual a sua idade?
                    <input />
                    Qual o seu e-mail?
                    <input />
                    Qual a sua escolaridade?
                    <select>
                        <option>Ensino Médio Completo</option>
                        <option>Ensino Médio Incompleto</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superios Completo</option>

                    </select>
                </Form>



            </Container>
        );
    }
}
