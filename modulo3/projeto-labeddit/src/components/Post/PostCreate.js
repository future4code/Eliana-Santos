import React, { useState } from 'react'
import { CreateText, Footer, PostCreateCard } from './styled'
import { Button } from '@mui/material'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import useForm from '../../hooks/useForm'
import { useHistory } from 'react-router-dom'


const PostCreate = () => {
    const [Post, setPost] = useState({})
    const history = useHistory()
    const [form, onChange, clear] = useForm({ body: "", title: "" })

    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            setPost(res.data)
            alert('Post Criado com sucesso!')
            clear()
            history.go(0);
        }).catch((error) => {
            alert(error.response.message) 
        })
    }

    const onSubmitForm = (event) => {
        console.log(form)
        event.preventDefault()
        createPost();
    }


    return (
        <PostCreateCard>

            <form onSubmit={onSubmitForm}>
                <CreateText
                    name='title'
                    fullWidth
                    placeholder='Título'
                    required
                    type='text'
                    onChange={onChange}
                />

                <CreateText
                    name='body'
                    placeholder='Escreva seu Post'
                    fullWidth
                    multiline
                    rows="5"
                    size='small'
                    required
                    type='text'
                    onChange={onChange}
                />

                <Footer>
                    <Button
                        variant='text'
                        fullWidth
                        value={Post}
                        onClick={() => createPost()}
                        onChange={onChange}>

                        Postar
                    </Button>
                </Footer>
            </form>

        </PostCreateCard>
    )
}

export default PostCreate;
