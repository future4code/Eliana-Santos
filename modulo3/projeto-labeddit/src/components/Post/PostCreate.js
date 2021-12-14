import React from 'react'
import { CreateText, Footer, PostCreateCard, } from './styled'
import { Button} from '@mui/material'


const PostCreate = () => {

    return (
        <PostCreateCard>
            <form>
                <CreateText fullWidth multiline size='small' />

                <Footer>
                    <Button variant='text' fullWidth>
                        Postar
                    </Button>

                </Footer>

            </form>

        </PostCreateCard>
    )
}

export default PostCreate;