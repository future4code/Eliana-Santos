import React from 'react';
import style from 'styled-components';


const PequenoCard = style.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const ImagemPequena = style.img
`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    `

function CardPequeno(props) {
    return (
        <PequenoCard>
            <ImagemPequena src={ props.imagem } />
            <div>
                <p>{ props.email }</p>
                <p>{ props.endereco }</p>
            </div>
        </PequenoCard>
    )
}

export default CardPequeno;