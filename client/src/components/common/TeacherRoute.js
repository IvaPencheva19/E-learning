import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

export const TeacherRoute = ({
    children
}) => {
    const { isAuthenticated, user } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to={'/login'} replace />
    } else if (user.role != 'Teacher') {
        return <Navigate to={'/home'} replace />
    }

    return children ? children : <Outlet />
}