import React from 'react';
import styled from 'styled-components';


const BigCarContainer = styled.div`

    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

     h4{
        margin-bottom: 15px;
    }

    div{
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    }
    `

const ImagemPerfil = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `
    

function CardGrande(props) {
    return (
        <BigCarContainer>
            <ImagemPerfil src={props.imagem} />
            <div>
                <h4>{props.nome}</h4>
                <p>{props.descricao}</p>
            </div>
        </BigCarContainer>
    )
}

export default CardGrande;