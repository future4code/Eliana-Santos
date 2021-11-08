import React from 'react';
import styled from 'styled-components';





const Container = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`


const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 5px;

`

export default class Informacoes2 extends React.Component {





    render() {
        return (
            <Container>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <Form>
                    Por que você não terminou um curso de graduação?
                    <input />
                    Você fez algum curso Complementar?
                    <select>
                        <option>Nenhum</option>
                        <option>Curso Técnico</option>
                        <option>Curso de Inglês</option>
                    </select>

                </Form>
            </Container>
        )



    }
}