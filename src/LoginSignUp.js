import React from 'react'

class LoginSignUp extends React.Component {

    state = {
        username: '',
        password: '',
        bio: '',
        avatar: '',
        login: false
    }

    submitHandler = (event) => {
        event.preventDefault()
        let user = {
            username: this.state.username,
            password: this.state.password,
            bio: this.state.bio,
            avatar: this.state.avatar
        }
        this.props.createUser(user)
    }

    loginHandler = (event) => {
        event.preventDefault()
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(user)
    }

    render() {
        return (
            <>
            {
                this.state.login
            ? 
                <form onSubmit={this.loginHandler}>
                    <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })}/>
                    <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
                    <button type='submit'>Login</button>
                </form> 
            :
                <>
                    <form onSubmit={this.submitHandler}>
                        <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })}/>
                        <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
                        <input type='text' name='bio' placeholder='Bio' value={this.state.bio} onChange={(e) => this.setState({ bio: e.target.value })}/>
                        <input type='text' name='avatar' placeholder='Avatar' value={this.state.avatar} onChange={(e) => this.setState({ avatar: e.target.value })}/>
                        <button type='submit'>Create an Account</button>
                    </form> 
                    <button onClick={() => this.setState({login: true})}>Already have an account?</button>
                </>
            }
            </>
        )
    }
}

export default LoginSignUp