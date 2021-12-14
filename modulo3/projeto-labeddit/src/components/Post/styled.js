import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { style } from '@mui/system'
import { TextField } from '@mui/material'

export const RecipeCardContainer = styled(Card)`
  width: 80%;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 #FF4403;
  
`

export const RecipeCardContent = styled(CardContent)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
`
export const PostHeader = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`
export const PostFooter = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 30px;
    justify-content: space-between;
`
export const ArrowIcon = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`
export const PostCreateCard = styled(Card)`
box-shadow: 0 2px 5px 0 #FF4403;

`
export const CreateText = styled(TextField)`
  width: 100%;
`
export const Footer = styled.div`
 height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    gap: 30px;
    justify-content: space-between;
`
