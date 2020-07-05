import React from 'react';
import LoginSignUp from './LoginSignUp';
import Profile from './Profile'

class App extends React.Component {

  state = {
    currentUser: {}
  }

  createUser = (user) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ user })
    })
    .then(resp => resp.json())
    .then(user => {
      this.setState({currentUser: user.user})
      this.getProfile(user)
      })

  }

  login = (user) => {
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }, 
      body: JSON.stringify({ user })
    })
    .then(resp => resp.json())
    .then(user => {
      this.setState({currentUser: user.user})
      this.getProfile(user)
    })
  }

  getProfile = (user) => {
    fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${user.jwt}`
      }
    })
    .then(resp => resp.json())
    .then(console.log)
  }

  render() {
    return (
      <div>
        {this.state.currentUser.id ? <Profile currentUser={this.state.currentUser} /> : <LoginSignUp login={this.login} createUser={this.createUser}/>}
      </div>
    );
  }
}

export default App;
