import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div>
            {user ? (
                <>
                    <h2>Welcome, {user.name}</h2>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <p>You are not logged in.</p>
            )}
        </div>
    );
};

export default Profile;
