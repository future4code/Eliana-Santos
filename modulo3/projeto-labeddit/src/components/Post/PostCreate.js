import React, { useState } from 'react'
import { CreateText, Footer, PostCreateCard } from './styled'
import { Button } from '@mui/material'
import axios from 'axios'
import { BASE_URL } from '../../constants/url'
import useForm from '../../hooks/useForm'


const PostCreate = () => {
    const [Post, setPost] = useState()
    const [form, onChange, clear] = useForm({ title: "Eliana", body: "" })

    const createPost = () => {
        axios.post(`${BASE_URL}/posts`, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            console.log(res)
            setPost(res.data)
            clear()
        }).catch((error) => {
            console.log(error)
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost();
    }



    return (
        <PostCreateCard>
            <form onSubmit={onSubmitForm}>

                <CreateText
                    name='body'
                    fullWidth 
                    multiline
                    rows="5"
                    size='small'
                    required
                    type='text'
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
