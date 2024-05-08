import { logger } from '../utils'
import logic from '../logic'
import { useState, useEffect } from 'react'
import { useContext } from '../context'

const Home = ({ onUserLoggedOut }) => {
    const [user, setUser] = useState(null)
    const [wod, setWod] = useState(null)
    const [wodCategory, setWodCategory] = useState(null)

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

    useEffect(() => {
        try {
            if (wodCategory) {
                logic.retrieveRandomWod(wodCategory)
                    .then(wod => setWod(wod))
                    .catch(error => showFeedback(error, 'error'))
            }
        } catch (error) {
            showFeedback(error)
        }
    }, [wodCategory])

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        } finally {
            onUserLoggedOut()
        }
    }

    const selectCategory = (category) => {
        setWodCategory(category)
    }

    const restartCategory = () => {
        setWodCategory(null)
        setWod(null)
    }

    const handleBenchmarkCategoryClick = () => {
        selectCategory('benchmarks')
    }

    const handleNormalCategoryClick = () => {
        selectCategory('normal')
    }

    const handleStrengthCategoryClick = () => {
        selectCategory('strength')
    }

    const handleEnduranceCategoryClick = () => {
        selectCategory('endurance')
    }

    return (
        <>
            <header>
                <div className="bg-[#F6EEEE] top-0 pt-12 flex flex-col items-center">
                    <div>
                        <img src="/wod-now-grey.png" alt="logo" />
                    </div>
                    <div className="flex items-center mt-8 ">
                        {user && (
                            <div className="flex items-center">
                                <div className="inline-block animate-spin text-[#2C305D]">
                                    &#9881;
                                </div>
                                <h1 className="font-bold ml-1">
                                    Hello, {user.name}!
                                </h1>
                            </div>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-12">
                        <button id="benchmarks-button" onClick={handleBenchmarkCategoryClick} className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Benchmarks</button>
                        <button id="normal-wod-button" onClick={handleNormalCategoryClick} className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Normal</button>
                        <button id="strength-button" onClick={handleStrengthCategoryClick} className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Strength</button>
                        <button id="endurance-button" onClick={handleEnduranceCategoryClick} className="bg-[#DCD6E4] text-black font-bold py-2 px-4 rounded">Endurance</button>
                    </div>

                    <div className="text-center mt-10"></div>
                </div>
            </header>

            <article className="bg-white">
                {wod && (
                    <div className="pt-4 pl-5">
                        <h2 className="font-semibold">{wod.category.toUpperCase()}</h2>
                        <p>{wod.name?.toUpperCase()}</p>
                        <br></br>
                        <ul>
                            {wod.parts.map((part) => (
                                <li key={part.id}>
                                    <br></br>
                                    <h3>{part.name}</h3>
                                    <p>Reps: {part.reps}</p>
                                    <ul>
                                        {part.activities.map((activity) => (
                                            <li key={activity.id}>
                                                <p>{activity.name}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </article>

            <footer className="fixed bottom-0 w-full h-[100px] flex justify-center items-center p-[10px] box-border bg-[#F6EEEE]">
                <button onClick={restartCategory} className="mr-5"><img src="/update-grey.png" alt="restart WOD" /></button>
                <button onClick={handleLogoutClick} className="ml-5"><img src="/exit-grey.png" alt="logout" /></button>
            </footer>
        </>
    )
}

export default Home