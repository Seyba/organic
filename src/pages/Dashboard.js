import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Dashboard = () => {
  const user = useSelector(state => state.auth.user)
  return (
    <div className="py-20">
      <div className="text-green-950 text-lg font-semibold text-center">Hello {user.name}</div>
      <div className="flex justify-center items-center">
        <Link className="text-lg font-semibold text-green-950 mr-4" to="/wishlist">
          Wish List
        </Link>
        <button className="border border-1 border-green-950 px-6 rounded-md hover:bg-green-950 hover:text-white py-2">Log Out</button>
      </div>
    </div>
  )
}
