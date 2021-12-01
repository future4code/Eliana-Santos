import React, { useEffect } from "react";
import styled from 'styled-components'
import { useState } from "react";
import axios from 'axios'
//import TelaMatch from "./components/TelaMatch/TelaMatch";



const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
padding: 50px;
border: 1px solid black;
width: 50%;

`

function App() {
  // const [match, setMatch] = useState(false)
  const [data, setDate] = useState({
    profile: {
      id: "",
      age: 0,
      name: "",
      photo: "",
      bio: ""
    }
  })

  useEffect(() => {
    getProfile();
    cleanProfiles()
  }, []);

  const getProfile = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person/`)
      .then((res) => {
        setDate(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  const matchProfile = (id, choice) => {
    const body = {
      id: id,
      choice: choice
  }
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person', body, 
       ).then((res) => {
        setDate(res.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  const cleanProfiles = () => {
    axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')
      .then((res) => {
        console.log('Clear profiles success!')
      })
      .catch((erro) => {
        console.log('Error clear profiles success!', erro)
      });
  }

  const onClickNoMatch = () => {
    getProfile();
  }

  const onClickMatch = (id, choice) => {
    console.log(data.profile)
    matchProfile(id,choice) 
  }



  return (
    <div>
      <Card>
        <div>
          <div>
            <button >Ver Match</button>
          </div>
          <img width="240" src={data.profile.photo} alt="imagens" />
          <div><strong>{data.profile.name}</strong>,{data.profile.age}
            <p>{data.profile.bio}</p>
          </div>
        </div>
        <div>
          <button onClick={onClickNoMatch}>Não</button>
          <button onClick={onClickMatch}  >Sim</button>
        </div>
      </Card>
    </div >
  );
}

export default App;
