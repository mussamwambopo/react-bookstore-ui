import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Callback from './components/Auth/Callback';
import Profile from './components/Auth/Profile';
import BookList from './components/Bookstore/BookList';
import Collection from './components/Bookstore/Collection';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/callback" element={<Callback />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/collection" element={<Collection />} />
            </Routes>
        </Router>
    );
};

export default App;
