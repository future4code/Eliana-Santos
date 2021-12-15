import React, { useState } from 'react'
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography'
import { CardContainer, CardText, PostHeader, PostFooter, ArrowIcon } from './styled'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Button, Divider } from '@mui/material'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { goToPost } from '../../router/coordinator';
import { useHistory } from 'react-router-dom';

const PostCard = (props) => {
  const [curtido, setCurtido] = useState(false)
  const [numeroCurtidas, setCurtidas] = useState(0)
  const history = useHistory()

  const onClickCurtida = () => {
    if (curtido) {
      setCurtido(!curtido)
      setCurtidas(numeroCurtidas - 1)
    } else {
      setCurtido(!curtido)
      setCurtidas(numeroCurtidas + 1)

    }
  };
  const onClickCard = (id) => {
    goToPost(history, id)
  } 

  return (
    <CardContainer onClick={props.onClick} >
      <CardActionArea>
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
          <Button>

            <ModeCommentOutlinedIcon
           
            onClick={() => onClickCard()}
            />
          </Button>
        </PostFooter>
      </CardActionArea>
    </CardContainer>
  )
}

export default PostCard