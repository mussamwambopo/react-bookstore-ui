import React, { useEffect, useState, useContext } from 'react';
import axios from '../../utils/api';
import { AuthContext } from '../context/AuthContext';

const Collection = () => {
    const { token } = useContext(AuthContext);
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        axios
            .get('/collection', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => setCollection(response.data));
    }, [token]);

    return (
        <div>
            <h2>Your Collection</h2>
            <ul>
                {collection.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Collection;
