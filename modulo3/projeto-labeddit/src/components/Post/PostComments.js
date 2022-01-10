import { Button } from "@mui/material";
import axios from "axios";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import useForm from "../../hooks/useForm";
import { CreateText, Footer, PostCreateCard } from "./styled";



const PostComments = () => {
    const [form, onChange, clear] = useForm({ body: "" })
    const history = useHistory()
    const params = useParams()
    const createComments = () => {
        axios.post(`${BASE_URL}/posts/${params.id}/comments`, form, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }).then((res) => {
            history.go(0);
            alert('Comentario criado com sucesso!')
            clear()
        }).catch((error) => {
            alert(error.response.message) 
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        createComments();
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
                    onChange={onChange} 
                />

                <Footer>
                    <Button
                        variant='text'
                        fullWidth
                        onClick={() => createComments()}
                        onChange={onChange}>
                        Comentar
                    </Button>
                </Footer>
            </form>

        </PostCreateCard>
    )
}
export default PostComments;