import React from 'react';
import '../RequireAuth/RequireAuth.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loader from '../../Shared/Loader/Loader';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth)
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }

    return children;
};

export default RequireAuth;