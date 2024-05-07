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
        <main className="bg-white text-black h-screen flex flex-col items-center justify-center">

            <div>
                <img src="/wod-now.png" alt="logo" />
            </div>

            <div className="max-w-md w-full p-8 rounded-lg">

                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-center">Account Login</h2>

                    <p className="text-center">
                        If you are already a member you
                        can login with your email
                        address and password
                    </p>

                    <div>
                        <label htmlFor="email" className="block">Email</label>
                        <input id="email" type="email" className="w-full bg-[#DCD6E4] text-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" id="password" className="w-full bg-[#DCD6E4] text-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>

                    <button type="submit" className="w-full bg-[#7D84B2] text-black rounded-md py-2 px-4 hover:bg-[#6871b3] transition-colors duration-300">Login</button>

                    <p className="text-center">
                        Don’t have an account yet? <a href="#" onClick={handleRegisterClick} className="text-blue-500 hover:underline">Register</a>
                    </p>
                </form>
            </div>
        </main>
    )
}

export default Login