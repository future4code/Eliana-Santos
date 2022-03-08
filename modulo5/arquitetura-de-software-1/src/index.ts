import { app } from "./controller/app";
import login from "./endpoints/login";
import signUp from "./endpoints/signUp";

app.post('/signup', signUp);
app.post('/login', login);



