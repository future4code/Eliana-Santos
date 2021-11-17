import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`
const FormPostagem = styled.form`

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  input{
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    
  }

`
const BotaoAdicionar = styled.button`

    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    font-weight: 400;
    font-size: 1rem;

    :not(:disabled):not(.disabled) {
    cursor: pointer;
    }

    :disabled {
    background-color: gray;
    border-color: gray;
    }
 
`

class App extends React.Component {
  state = {
    posts: [
      {
        key: 1,
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"

      },
      {
        key: 2,
        nomeUsuario: "Joana",
        fotoUsuario: "https://picsum.photos/200/150",
        fotoPost: "https://picsum.photos/200/150"

      },
      {
        key: 3,
        nomeUsuario: "Margarida",
        fotoUsuario: "https://picsum.photos/200/150",
        fotoPost: "https://picsum.photos/200/150"
      }
    ],
    inputNome: "",
    inputFoto: "",
    inputPost: ""
  };

  adicionaPostagem = () => {

    const novaPostagem = {
      key: (Math.max(this.state.posts.map((post) => post.key)) + 1),
      nomeUsuario: this.state.inputNome,
      fotoUsuario: this.state.inputFoto,
      fotoPost: this.state.inputPost
    };

    const novoPostagens = [...this.state.posts, novaPostagem];

    this.setState({ posts: novoPostagens });
  };

  onChangeInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  }
  onChangeInputFoto = (event) => {
    this.setState({ inputFoto: event.target.value });
  }
  onChangeInputPost = (event) => {
    this.setState({ inputPost: event.target.value });
  }

  render() {
    console.log(this.state)
    return (
      <MainContainer>
        <FormPostagem>
          <input
            value={this.state.inputNome}
            onChange={this.onChangeInputNome}
            placeholder="Nome"
          />
          <input
            value={this.state.inputFoto}
            onChange={this.onChangeInputFoto}
            placeholder="Foto do Usuário"
          />
          <input
            value={this.state.inputPost}
            onChange={this.onChangeInputPost}
            placeholder="Post"
          />
          <BotaoAdicionar type="button" onClick={this.adicionaPostagem} >Adicionar</BotaoAdicionar>
        </FormPostagem>

        {this.state.posts.map((post) => {
          return <Post key={post.key}
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
          />
        })
        }
      </MainContainer>
    )
  }
}

export default App;


