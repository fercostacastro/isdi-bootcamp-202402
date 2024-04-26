import { logger } from '../utils'

import logic from '../logic'

import { useContext } from '../context'

function Login({ onUserLoggedIn, onRegisterClick }) {
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        logger.debug('Login -> handleSubmit', email, password)

        try {
            logic.loginUser(email, password)
                .then(() => {
                    form.reset()

                    onUserLoggedIn()
                })
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleRegisterClick = event => {
        event.preventDefault()

        onRegisterClick()
    }

    logger.debug('Login -> render')

    return (
        <main className="bg-black text-white min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-8 rounded-lg shadow-lg">

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block">Email</label>
                        <input id="email" type="email" className="w-full text-black rounded-md border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" id="password" className="w-full text-black rounded-md border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-colors duration-300">Login</button>
                </form>

                <p className="mt-4 text-center">
                    <a href="#" onClick={handleRegisterClick} className="text-blue-500 hover:underline">Register</a>
                </p>
            </div>
        </main>
    )
}

export default Login