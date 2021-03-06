import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SingUpPage";

const Router = ({ setRightButtonText }) => {

    return (
        <Switch>
            <Route exact path='/' >
                <Redirect to={localStorage.getItem('token') ? '/feed' : '/login'} />
            </Route>

            <Route exact path='/login' >
                <LoginPage setRightButtonText={setRightButtonText} />
            </Route>

            <Route exact path='/signup'>
                <SignUpPage setRightButtonText={setRightButtonText} />
            </Route>

            <Route exact path='/feed'>
                <FeedPage />
            </Route>

            <Route exact path='/post/:id'>
                <PostPage />
            </Route>
        </Switch>
    )
}
export default Router;