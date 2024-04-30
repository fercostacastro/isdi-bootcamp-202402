import { logger } from '../utils'

import logic from '../logic'

import { useState, useEffect } from 'react'
// import PostList from '../components/PostList'
// import CreatePost from '../components/CreatePost'
// import EditPost from '../components/EditPost'

import { Routes, Route } from 'react-router-dom'
// import Profile from '../components/Profile'

import { useContext } from '../context'

function Home({ onUserLoggedOut }) {
    const [user, setUser] = useState(null)
    const [view, setView] = useState(null)
    const [stamp, setStamp] = useState(null)
    const [post, setPost] = useState(null)

    const { showFeedback } = useContext()

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(setUser)
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }, [])

    const clearView = () => setView(null)

    const handleGenerateWodClick = () => clearView()

    const handlePostCreated = () => {
        clearView()
        setStamp(Date.now())
    }

    const handleGenerateWod = () => setView('create-wod')

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        } finally {
            onUserLoggedOut()
        }
    }

    logger.debug('Home -> render')

    return <>
        <header className="bg-white h-screen top-0 flex flex-col items-center mt-12">
            <div>
                <img src="../../public/wod-now.png" alt="logo" className="bg-white" />
            </div>
            <div className="flex items-center mt-3">
                {user && (
                    <div className="flex items-center">
                        <div className="inline-block animate-spin text-[#2C305D]">
                            &#9881;
                        </div>
                        <h1 className="font-bold">
                            Hello, {user.name}!
                        </h1>
                    </div>
                )}
            </div>

            <div className="flex justify-center items-center mt-5 cursor-pointer">

                <div class="flex-auto flex flex-col justify-center items-center">
                    <div class="m-2">
                        <img src="../../public/benchmarks.png" alt="logo" class="bg-white" />
                    </div>
                    <div class="m-2">
                        <img src="../../public/normalwod.png" alt="logo" class="bg-white" />
                    </div>
                    <div class="m-2">
                        <img src="../../public/strength.png" alt="logo" class="bg-white" />
                    </div>
                    <div class="m-2">
                        <img src="../../public/endurance.png" alt="logo" class="bg-white" />
                    </div>
                </div>

            </div>

            {/* <div className="flex justify-center items-center">
                <div className="flex-auto flex flex-col justify-center items-center">
                    <button className="w-132 h-15 bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded mt-10 m-10">Benchmarks</button>
                    <button className="w-132 h-15 bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded mt-5 m-10">Normal WOD</button>
                </div>
                <div className="flex-auto flex flex-col justify-center items-center">
                    <button className="w-132 h-15 bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded mt-10 m-10">Strength</button>
                    <button className="w-132 h-15 bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded mt-5 m-10">Endurance</button>
                </div>
            </div> */}

        </header>


        <footer className="fixed bottom-0 w-full h-[50px] flex justify-center items-center p-[10px] box-border bg-white mb-[20px]">

            <button onClick={handleGenerateWodClick}><img src="../../public/update.png" alt="generate another WOD" /></button>

            <button onClick={handleLogoutClick}><img src="../../public/exit.png" alt="lougout " /></button>
        </footer>
    </>
}

export default Home