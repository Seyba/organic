import React from 'react'
import { useSelector } from 'react-redux'

export const Dashboard = () => {
  const user = useSelector(state => state.auth.user)
  return (
    <div className="py-20">
        <div className="text-green-950 text-lg font-semibold text-center">Hello {user.firstname}</div>
    </div>
  )
}
