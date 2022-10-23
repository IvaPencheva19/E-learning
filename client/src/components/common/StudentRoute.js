import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

export const StudentRoute = ({
    children
}) => {
    const { isAuthenticated, user } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to={'/login'} replace />
    } else if (user.role != 'Student') {
        return <Navigate to={'/home'} replace />
    }

    return children ? children : <Outlet />
}