import React, { useState, useContext, useEffect } from 'react';
import * as userActions from '../../store/actions';
import { UserContext } from '../../common';

import { Link, Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Card, CardContent, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const SignUp = ({ currentUser, requestUserSignUp, ...props }) => {
  const { user, setUser } = useContext(UserContext);
  const [signUpForm, setSignUpForm] = useState({
    username: '',
    password: ''
  });

  const signUpEnabled =
    signUpForm.username.length > 0 && signUpForm.password.length > 0;

  const handleOnChange = event => {
    const { target = {} } = event || {};
    const { name = '', value = '' } = target || {};
    setSignUpForm(form => ({ ...form, [name]: value.trim() }));
  };

  const handleSignIn = e => {
    e.preventDefault();
    requestUserSignUp(signUpForm.username, signUpForm.password);
  };

  useEffect(() => {
    currentUser &&
      currentUser.identity &&
      setUser(user => ({
        ...user,
        userName: currentUser.identity.username,
        isAuthenticated: currentUser.isAuthenticated
      }));
  }, [currentUser, setUser]);

  return (
    <>
      {user.isAuthenticated && <Redirect to={`/todos`} />}
      <Card variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Already have an account.{' '}
            <Link to="/">Sign In</Link>
          </Typography>
          <h3>Sign Up</h3>
          <form noValidate autoComplete="off" onSubmit={handleSignIn}>
            <div>
              <TextField
                id="username"
                name="username"
                label="User Name"
                value={signUpForm.userName}
                onChange={handleOnChange}
              />
            </div>
            <div>
              <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                value={signUpForm.password}
                onChange={handleOnChange}
              />
            </div>
            <div style={{ marginTop: '10px' }}>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={!signUpEnabled}
              >
                Sign Up
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.user
  };
}

const mapDispatchToProps = {
  requestUserSignUp: userActions.requestUserSignUp
};

export const SignUpPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
