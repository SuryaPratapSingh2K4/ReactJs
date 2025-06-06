import React, {useContext} from 'react'
import UserContext from '../context/UserContext'
import Login from './Login'

function Profile() {
    const {User} = useContext(UserContext)

    if(!User) return <div>please Login</div>
    
    return <div>Welcome {User.username}</div>
    
}

export default Profile
