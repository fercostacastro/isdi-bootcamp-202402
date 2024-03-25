import logic from '../utils.mjs'

import { Component } from 'react'
import Landing from './Landing'
import Login from './Login'
import Register from './Register'
import Home from './Home'

class Chat extends Component {
    constructor() {
        super()
    }

    render() {
        if (this.state.view === 'landing')
            return <Landing onLoginClick={() => this.setState({ view: 'login' })} onRegisterClick={() => this.setState({ view: 'register' })} />
        else if (this.state.view === 'login')
            return <Login onRegisterClick={() => this.setState({ view: 'register' })} onUserLoggedIn={() => this.setState({ view: 'home' })} />
        else if (this.state.view === 'register')
            return <Register onLoginClick={() => this.setState({ view: 'login' })} onUserRegistered={() => this.setState({ view: 'login' })} />
        else if (this.state.view === 'home')
            return <Home />
        else
            return <h1>🤨</h1>
    }
}