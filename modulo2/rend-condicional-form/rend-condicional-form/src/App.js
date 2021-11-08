import React from 'react';
import styled from 'styled-components';
import DadosGerais from './Components/DadosGerais';
import Informacoes1 from './Components/Informacoes1';
import Informacoes2 from './Components/Informacoes2';
import Finalizacao from './Components/Finalizacao';

  const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


`


/* const Form = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;

`  */
const Botao = styled.button`
   border-radius: 5px;
   background-color: pink;
   color: white;
`

export default class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <DadosGerais />
      case 2:
        return <Informacoes1 />
      case 3:
        return <Informacoes2 />
      case 4:
        return <Finalizacao />
      default:
        <p>Página inexistente</p>
        break
    }
  }

  nextPage = () => {
    console.log(this.state.etapa)

    this.setState({
      etapa: this.state.etapa + 1
    });

  }



  render() {

    return (
      <Container>
        <ul>

          {this.renderizaEtapa()}

        </ul>
        <Botao onClick={this.nextPage} >Próxima Etapa</Botao>

      </Container>
    );

  }
}




