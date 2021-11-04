import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Foto1 from './img/foto1.jpeg'
import FotoAle from './img/fotoale.jpeg'
import FotoBrinde from './img/fotobrinde.jpeg'
import FotoPaisagem from './img/fotopaisagem.jpeg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Margarida'}
          fotoUsuario={FotoAle}
          fotoPost={Foto1}
        />
        <Post 
          nomeUsuario={'Joana'}
          fotoUsuario={FotoPaisagem}
          fotoPost={FotoBrinde}
        />
      </MainContainer>
    );
  }
}

export default App;
