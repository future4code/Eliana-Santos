import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const TelaMatch = () => {
    const [listMatch, setListMatch]= useState()

    useEffect(() => {
        getListMatch();
      }, []);
    
      const getListMatch = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person/`)
          .then((res) => {
              console.log(res.data)
            setListMatch(res.data);
          })
          .catch((erro) => {
            console.log(erro);
          });
      }
    


    return (
        <div>
         
        </div>
    )
}
export default TelaMatch;