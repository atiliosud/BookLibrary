import React, { useState } from 'react';
import './App.css';

function App() {
    const [searchBy, setSearchBy] = useState('firstName');
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Lógica para consumir a API com base nos valores de searchBy e searchValue
        fetch(`https://localhost:7176/Books?$filter=${searchBy} eq '${searchValue}'`)
            .then(response => response.json())
            .then(data => setSearchResults(data))
            .catch(error => console.error('Erro ao buscar dados:', error));
    };

    return (
        <div>
            <h1>Search Page</h1>
            <label htmlFor="searchBy">Search By:</label>
            <select id="searchBy" value={searchBy} onChange={e => setSearchBy(e.target.value)}>
                <option value="firstName">First Name Authors</option>
                <option value="lastName">Last Name Authors</option>
                <option value="title">Book Title</option>
                <option value="isbn">ISBN</option>
            </select>
            <br />
            <label htmlFor="searchValue">Search Value:</label>
            <input type="text" id="searchValue" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            <br />
            <button onClick={handleSearch}>Search</button>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Publisher</th>
                        <th>Authors</th>
                        <th>Type</th>
                        <th>ISBN</th>
                        <th>Category</th>
                        <th>Available Copies</th>
                    </tr>
                </thead>
                <tbody>
                    {searchResults.map(book => (
                        <tr key={book.bookId}>
                            <td>{book.title}</td>
                            <td>{book.firstName} {book.lastName}</td>
                            <td>{book.type}</td>
                            <td>{book.isbn}</td>
                            <td>{book.category}</td>
                            <td>{book.copiesInUse} / {book.totalCopies}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
