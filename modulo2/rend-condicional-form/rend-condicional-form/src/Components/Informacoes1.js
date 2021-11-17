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

export default class Informacoes1 extends React.Component {





    render() {
        return (
            <Container>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <Form>
                    Qual curso?
                    <input />
                    Qual a unidade de ensino?
                    <input />
                </Form>
            </Container>
        )



    }
}