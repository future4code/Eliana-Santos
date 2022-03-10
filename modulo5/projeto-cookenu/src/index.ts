import app from "./app";
import createRecipe from "./endpoints/createRecipe";
import getProfile from "./endpoints/getProfile";
import getProfileUser from "./endpoints/getProfileUser";
import getRecipe from "./endpoints/getRecipe";
import login from "./endpoints/login";
import signUp from "./endpoints/signUp";

app.get('/user/profile', getProfile)
app.get('/user/:id', getProfileUser)
app.get('/recipe/:id', getRecipe)

app.post('/user/signup', signUp);
app.post('/user/login', login)
app.post('/recipe', createRecipe)