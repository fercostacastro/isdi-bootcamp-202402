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
        <main className="bg-white text-black h-screen flex flex-col items-center justify-center">

            <div>
                <img src="../../public/wod-now.png" alt="logo" className="" />
            </div>

            <div className="max-w-md w-full p-8 rounded-lg shadow-lg">

                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-center">Create an account</h2>

                    <div>
                        <label htmlFor="name" className="block">Name</label>
                        <input type="text" id="name" className="w-full bg-[#DCD6E4] text-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block">Email</label>
                        <input type="email" id="email" className="w-full bg-[#DCD6E4] text-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>

                    <div>
                        <label htmlFor="password" className="block">Password</label>
                        <input type="password" id="password" className="w-full bg-[#DCD6E4] text-black rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                    </div>

                    <button type="submit" className="w-full bg-[#7D84B2] text-black rounded-md py-2 px-4 hover:bg-[#6871b3] transition-colors duration-300">Create an account</button>

                    <p className="text-center">
                        Already have an account? <a href="#" onClick={handleLoginClick} className="text-blue-500 hover:underline">Login</a>
                    </p>
                </form>


            </div>
        </main>
    )
}

export default Register