import app from './app'
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import getEmailUser from "./endpoints/getEmailUser"
import loginUser from "./endpoints/loginUser"
import getProfile from "./endpoints/getProfile"

app.get('/user', getEmailUser)
app.get('/user/profile', getProfile)
app.post('/user/signup', createUser)
app.post('/user/login', loginUser)
app.put('/user/edit/:id', editUser)