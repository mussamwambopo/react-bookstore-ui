import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Callback = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        if (token) {
            login(token);
            navigate('/profile');
        }
    }, [login, navigate]);

    return <div>Loading...</div>;
};

export default Callback;
