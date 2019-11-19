import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './HomePage/homePage';
import Header from "./Header/header";
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import HomePage from './HomePage/homePage';
import PopulationPage from './Population/population';
import LoginPage from './Login/login'
import PersonalPage from './Population/Personal/personal';
import ShoppcarPage from './Population/Shoppcar/shoppcar';
import ServicePage from './Population/Service/service';
import Register from './Register/register'

import ClassificationPage from './Population/Classification/classification';
import Forget from './Forget/forget';

class IndexPage extends React.Component{
    render(){
        return(
            <div>
               
                <BrowserRouter basename='job'>
              
              <Switch>
              <Route path="/population" component={PopulationPage}></Route>
              <Route path="/homePage" component={HomePage}></Route>
              <Route path="/personal" component={PersonalPage}></Route>
              <Route path="/login" component={LoginPage}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/shoppcar" component={ShoppcarPage}></Route>
              <Route path="/service" component={ServicePage}></Route>
              <Route path="/classification"component={ClassificationPage} ></Route>
              <Route path="/forget" component={Forget}></Route>
              <Redirect to="/homePage"></Redirect>
              </Switch>
              </BrowserRouter>
              
            </div>
        )
    }
}
ReactDOM.render(<IndexPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
