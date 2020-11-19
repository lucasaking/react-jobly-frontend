import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Homepage from './Homepage';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import ProfileForm from './ProfileForm';
import Logout from "./Logout";
// import FilterCompanyDetails from './FilterCompanyDetails';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/companies">
        <CompanyList />
      </Route>
      <Route exact path="/companies/:name">
        <CompanyDetail />
      </Route>
      <Route exact path="/jobs">
        <JobList />
      </Route>      
      <Route exact path="/login">
        <LoginForm/>
      </Route>
      <Route exact path="/signup">
        <SignupForm/>
      </Route>
      <Route exact path="/profile">
        <ProfileForm />
      </Route>
      <Route exact path="/logout">
        <Logout />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;