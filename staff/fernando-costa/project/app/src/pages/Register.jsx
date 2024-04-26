import { logger } from '../utils'

import logic from '../logic'

import { useContext } from '../context'

function Register({ onUserRegistered, onLoginClick }) {
    const { showFeedback } = useContext()

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        try {
            logic.registerUser(name, email, password)
                .then(() => {
                    form.reset()

                    onUserRegistered()
                })
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }

    const handleLoginClick = event => {
        event.preventDefault()

        onLoginClick()
    }

    logger.debug('Register -> render')

    return (
        <main className="bg-black text-white min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-8 rounded-lg shadow-lg">
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block">Name</label>
                        <input type="text" id="name" className="w-full text-black rounded-md border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block">Email</label>
                        <input type="email" id="email" className="w-full text-black rounded-md border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" id="password" className="w-full text-black rounded-md border-gray-400 py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-colors duration-300">Register</button>
                </form>

                <p className="mt-4 text-center">
                    <a href="#" onClick={handleLoginClick} className="text-blue-500 hover:underline">Login</a>
                </p>
            </div>
        </main>
    )
}

export default Register