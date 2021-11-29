import React from 'react';
import ListaPlaylists from './components/ListaPlaylists';
import {Inicio,} from './components/styled'




export default class App extends React.Component {

 

  render() {
    return (
      <div>
        <Inicio>
          <h1>Labefy</h1>
        </Inicio>
      
      <ListaPlaylists/>
      
      </div>
    )
  }
}