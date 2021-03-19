import React from 'react';
import './App.css';
import Header from "./shared/header/header.component";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import AboutUs from "./modules/about-us/about-us.component";
import Form from "./modules/form/form.component";
import store from "./store/store";
import {Provider} from "react-redux";
import UsersListModule from "./modules/users-list/users-list.module";
import ItemBodyAboutUs from "./modules/about-us/about-us-item-body.component";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path='/userlist' exact={true} component={UsersListModule}/>
                        <Route path='/form' exact={true} component={Form}/>
                        <Route path='/aboutus' exact={true} component={AboutUs}/>
                        <Route path='/photoItem' exact={true} component={ItemBodyAboutUs}/>
                        <Redirect from='/' to='userlist' exact={true}/>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
