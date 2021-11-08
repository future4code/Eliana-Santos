import React from 'react';
import styled from 'styled-components';



const Mensagem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`


export default class Finalizacao extends React.Component {





    render() {
        return (
            <Mensagem>
                <h2>FORMULÁRIO ACABOU</h2>
                <p>Muito Obrigada por participar! Entraremos em contato!</p>
            </Mensagem>
        )



    }
}