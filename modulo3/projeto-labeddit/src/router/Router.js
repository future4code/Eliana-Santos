import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from "../components/Header/Header";
import FeedPage from "../pages/FeedPage/FeedPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignUpPage from "../pages/SignUpPage/SingUpPage";

const Router = () => {

    return (
        <BrowserRouter>
            <Header />
            <Switch>

                <Route exact path='/login'>
                    <LoginPage />
                </Route>

                <Route exact path='/signup'>
                    <SignUpPage />
                </Route>

                <Route exact path='/feed/:id'>
                    <FeedPage />
                </Route>

                <Route exact path='/post/:id'>
                    <PostPage />
                </Route>
            </Switch>
        </BrowserRouter >


    )
}
export default Router;