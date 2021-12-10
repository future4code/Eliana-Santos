import React from "react";
import HomePage from '../pages/HomePage'
import ListTripsPage from '../pages/ListTripsPage'
import ApplicationFormPage from '../pages/ApplicationFormPage'
import AdminHomePage from '../pages/AdminHomePage'
import LoginPage from '../pages/LoginPage';
import TripsDetailsPage from '../pages/TripDetailsPage';
import CreateTripPage from '../pages/CreateTripPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


export const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
  
          <Route exact path={"/"}>
            <HomePage />
          </Route>
  
          <Route exact path={"/trips/list"}>
            <ListTripsPage />
          </Route>
  
          <Route exact path={"/login"}>
            <LoginPage />
          </Route>
  
          <Route exact path={"/admin/trips/list"}>
            <AdminHomePage />
          </Route>
  
  
          <Route exact path={"/admin/trips/create"}>
            <CreateTripPage />
          </Route>
  
  
          <Route exact path={"/admin/trips/:id"}>
            <TripsDetailsPage  />
          </Route>
          
          <Route>
            <ApplicationFormPage exact path={"/trips/application"} />
          </Route>
  
        </Switch>
      </BrowserRouter>
    );
  }
  
  