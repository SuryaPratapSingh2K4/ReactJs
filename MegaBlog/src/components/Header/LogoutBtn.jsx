import React from 'react'
import { useDispatch } from 'react-redux'
import authService, { AuthService } from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block px-6 py-2 hover:bg-red-600 rounded'
    onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn
