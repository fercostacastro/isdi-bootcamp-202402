import { useParams } from 'react-router-dom'

function Profile() {
    const { username } = useParams()

    // TODO call api to get posts bu username

    return <h1>hello {username}</h1>
}

export default Profile