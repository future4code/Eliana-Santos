import styled from 'styled-components'
import Fab from '@mui/material/Fab'

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-around;
  flex-wrap: wrap;
  margin: 30px;
  gap:10px;
 
`

export const AddPostButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`