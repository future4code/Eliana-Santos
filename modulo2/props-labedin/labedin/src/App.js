import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/Cardpequeno/CardPequeno';
import Local from './img/local.png';
import ImagemPerfil from './img/perfil.jpeg'
import ImagemEmail from './img/email.png'
import ImagemFacu from './img/facu.png'
import ImagemLabenu from './img/labenu.png'



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={ImagemPerfil}
          nome="Eliana"
          descricao="Oi, meu nome é Eliana, sou estudante do curso de Web full stack pela Labenu. Sou uma pessoa em busca de conhecimento e mudanças melhores para o mundo"
        />

        <ImagemButton
          imagem=""
          texto="Ver mais"
        />
      </div>
      <div className="page-section-container">

        <CardPequeno
          imagem={ImagemEmail}
          email="eliana@gmail.com.br"
        />
        <CardPequeno
          imagem={Local}
          endereco="Av.goiás, n 272"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências Acadêmicas</h2>
        <CardGrande
          imagem={ImagemLabenu}
          nome="Labenu"
          descricao="Conhecimento pela tecnologias HTML, JS e CSS através do curso de Web Full Stack da Labenu"
        />

        <CardGrande 
          imagem={ImagemFacu} 
          nome="Universidade Salgado de Oliveira" 
          descricao="Graduada em Direito - 2020/2" 
        /> 
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
