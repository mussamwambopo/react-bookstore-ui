import React, { useEffect, useState } from 'react';
import axios from '../../utils/api';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('/books').then((response) => setBooks(response.data));
    }, []);

    return (
        <div>
            <h2>Book List</h2>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
