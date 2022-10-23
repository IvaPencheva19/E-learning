import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const PublicRoute = ({
    children,
}) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (isAuthenticated) {
        return <Navigate to={'/home'} replace />
    }

    return children ? children : <Outlet />
}