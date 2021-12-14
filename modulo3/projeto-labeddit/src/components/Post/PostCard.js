import React from 'react'
import CardActionArea from '@mui/material/CardActionArea'
import Typography from '@mui/material/Typography'
import { RecipeCardContainer, RecipeCardContent, PostHeader, PostFooter, ArrowIcon } from './styled'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Divider } from '@mui/material'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
const PostCard = (props) => {

  return (
    <RecipeCardContainer onClick={props.onClick}>
      <CardActionArea>
        <PostHeader>
          <p>{props.title}</p>
        </PostHeader>

        <Divider />

        <RecipeCardContent>
          <Typography align={'center'}>
            {props.body}
          </Typography>
        </RecipeCardContent>

        <Divider />

        <PostFooter>
          <ArrowIcon>
            <ArrowCircleDownIcon
            /*           icone={iconeCurtida}
                      onClickIcone={onClickCurtida}
                    valorContador={numeroCurtidas} */
            />
            <p>0</p>

            <ArrowCircleUpIcon />

          </ArrowIcon>

          <ModeCommentOutlinedIcon
          /* icone={iconeComentario}
          onClickIcone={onClickComentario}
        valorContador={numeroComentarios} */
          />
        </PostFooter>
      </CardActionArea>
    </RecipeCardContainer>
  )
}

export default PostCard