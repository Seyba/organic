import { Navigate, Outlet } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export const ProtectedRoutes = () => {
    const user = null //'mohmo'
    //const auth = useSelector((state) => state.auth.user)
    // const dispatch = useDispatch()
    // const ctx = useContext(BoutiqueContext)
    // const { user } = ctx
    
    return user? <Outlet/> : <Navigate to="/login"/>
}