import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'

export const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)

  const handleLogout = () => {
    dispatch(logout)
    navigate('/')
  }
  
  return (
    <div className="py-20">
      <div className="text-green-950 text-lg font-semibold text-center">Hello {user.firstname}</div>
      <div className="flex justify-center items-center">
        <Link className="text-lg font-semibold text-green-950 mr-4" to="/wishlist">
          Wish List
        </Link>
        <button 
          className="border border-1 border-green-950 px-6 rounded-md hover:bg-green-950 hover:text-white py-2"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </div>
  )
}
