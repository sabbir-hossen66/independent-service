import React from 'react';
import '../RequireAuth/RequireAuth.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    const location = useLocation();
    if (!user) {
        return <Navigate to='/login' state={{ from: location }}></Navigate>
    }

    return children;
};

export default RequireAuth;