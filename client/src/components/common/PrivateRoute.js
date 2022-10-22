import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

export const PrivateRoute = ({
    children
}) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        console.log('private Route guard = ', isAuthenticated);
        return <Navigate to={'/login'} replace />
    }

    return children ? children : <Outlet />
}