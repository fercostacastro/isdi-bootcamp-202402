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

    return (
        <>
            <header className="bg-[#F6EEEE] min-h-screen top-0 pt-12 flex flex-col items-center">
                <div>
                    <img src="../../public/wod-now-grey.png" alt="logo" />
                </div>
                <div className="flex items-center mt-8 ">
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

                <div className="grid grid-cols-2 gap-4 mt-12">
                    <button id="benchmarks-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Benchmarks</button>
                    <button id="normal-wod-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Normal WOD</button>
                    <button id="strength-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Strength</button>
                    <button id="endurance-button" className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Endurance</button>
                </div>

                <div id="wod" className="text-center mt-10"></div>
            </header >

            <footer className="fixed bottom-0 w-full h-[100px] flex justify-center items-center p-[10px] box-border bg-[#F6EEEE] mb-[20px]">
                <button onClick={handleGenerateWodClick} className="mr-5"><img src="../../public/update-grey.png" alt="generate another WOD" /></button>
                <button onClick={handleLogoutClick} className="ml-5"><img src="../../public/exit-grey.png" alt="logout" /></button>
            </footer>
        </>
    )
}
export default Home