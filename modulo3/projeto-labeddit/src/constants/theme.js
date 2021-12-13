import { createTheme } from '@mui/material/styles'
import { primaryColor, neutraColor } from './color'

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: 'white',

        },
        text:{
            primary:neutraColor
        }
    }
})
export default theme;