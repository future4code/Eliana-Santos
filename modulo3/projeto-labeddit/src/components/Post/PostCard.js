import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { CardContainer, CardText, PostHeader, PostFooter, ArrowIcon } from './styled'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Button, Divider } from '@mui/material'
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import { goToPost } from '../../router/coordinator';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';


/* dy: "Testando"
commentCount: "2"
createdAt: "2021-12-16T19:41:26.552Z"
id: "58d1f3a3-7b68-4835-891e-5f4aa27bf288"
title: "Teste número 4"
userId: "1ac8bc59-fc8c-4e23-bc19-9852272537b6"
userVote: null
username: "Marcelo"
voteSum: "3" */


const PostCard = (props) => {
  const history = useHistory();

  const [post, setPost] = useState(props.data)

  const onClickComment = (id) => {
    goToPost(history, id)
  }

  const setVote = (like) => {

    const body = {
      direction: like ? 1 : -1
    }

    axios.post(`${BASE_URL}/posts/${props.data.id}/votes`, body, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((res) => {
      setPost({
        ...post,
        voteSum: like ? Number(post.voteSum += 1) : Number(post.voteSum -= 1)
      })
    }).catch((error) => {
      alert(error.response.message)
    })
  }

  /*   const votePost = () => {
      const body = {
        direction: value
      }
      axios.put(`${BASE_URL}/posts/${props.data.id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }).then((res) => {
        console.log(res)
        setvalue(res.data)
      }).catch((error) => {
        alert(error.response.message)
      })
    } */

  return (
    <CardContainer >

      <PostHeader>
        <p>{post.username}</p>
        <p>{post.title}</p>
      </PostHeader>

      <Divider />

      <CardText>
        <Typography align={'center'}>
          <p>{post.body}</p>
        </Typography>
      </CardText>

      <Divider />

      <PostFooter>
        <ArrowIcon>
          <Button onClick={() => setVote(false)} >
            <ArrowCircleDownIcon />
          </Button>

          <p>{post.voteSum}</p>

          <Button onClick={() => setVote(true)} >
            <ArrowCircleUpIcon />
          </Button>

        </ArrowIcon>
        <Button>

          <ModeCommentOutlinedIcon onClick={() => onClickComment(post.id)} />
        </Button>
      </PostFooter>
    </CardContainer>
  )
}

export default PostCard