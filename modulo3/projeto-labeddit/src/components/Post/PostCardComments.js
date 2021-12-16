import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { CardContainer, CardText, PostHeader, PostFooter, ArrowIcon } from './styled'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Button, Divider } from '@mui/material'


const PostCardComments = (props) => {
    const [curtido, setCurtido] = useState(false)
    const [numeroCurtidas, setCurtidas] = useState(0)

    const onClickCurtida = () => {
        if (curtido) {
            setCurtido(!curtido)
            setCurtidas(numeroCurtidas - 1)
        } else {
            setCurtido(!curtido)
            setCurtidas(numeroCurtidas + 1)

        }
    };

    /*   
      const votePost = () =>{
        axios.put(`${BASE_URL}/posts//votes`,{
          headers:{
            Authorization: localStorage.getItem('token')
          }
        }).then((res) =>{
    
        }).catch((error)=>{
    
        })
      } */
    return (
        <CardContainer >

            <PostHeader>
                <p>{props.data.username}</p>
            </PostHeader>

            <Divider />

            <CardText>
                <Typography align={'center'}>
                    <p>{props.data.body}</p>
                </Typography>
            </CardText>

            <Divider />

            <PostFooter>
                <ArrowIcon>
                    <Button onClick={onClickCurtida}
                        valorContador={numeroCurtidas}>
                        <ArrowCircleDownIcon />
                    </Button>
                    {numeroCurtidas ? numeroCurtidas : -1}
                    <Button onClick={onClickCurtida}
                        valorContador={numeroCurtidas}>
                        <ArrowCircleUpIcon
                        />

                    </Button>

                </ArrowIcon>
            </PostFooter>
        </CardContainer>
    )
}

export default PostCardComments;