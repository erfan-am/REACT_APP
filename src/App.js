import React from "react";
import "./styles.css";
import Layout from "./app/shared/Navigation/Layout";
import Images from "./app/images/page/Image";
import Users from "./app/users/page/Users";
import User from "./app/users/page/user";
import Login from "./app/Auth/logIn/log";
import Signup from "./app/Auth/sign/signup";
import Place from "./app/place/page/place";
import { API } from "./contextApi/contextAPI";
import { Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <API>
        <Layout>
          <Switch>
            <Route exact component={Images} path="/" />
            <Route component={Users} exact path="/users" />
            <Route component={User} exact path="/users/:userId" />
            <Route component={Login} path="/login" />
            <Route component={Signup} path="/signup" />
            <Route exact component={Place} path="/places/:imageId" />
          </Switch>
        </Layout>
      </API>
    </div>
  );
}
