import React, { useState, useEffect, useRef } from 'react';
import Cards from './Card';

function MiApi() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [sortOrder, setSortOrder] = useState('relevance');
    const inputRef = useRef(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${sortOrder}`
          );
          const data = await response.json();
          setBooks(data.items || []);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [query, sortOrder]);
  
    const handleSearch = () => {
      setQuery(inputRef.current.value);
    };
  
    const handleSortChange = (event) => {
      setSortOrder(event.target.value);
    };
  
    return (
      <div className="App">
        <h1>Google Books Search</h1>
        <div>
          <label>
            Search:
            <input type="text" ref={inputRef} />
          </label>
          <button onClick={handleSearch}>Search</button>
        </div>
        <div>
          <label>
            Sort by:
            <select onChange={handleSortChange} value={sortOrder}>
              <option value="relevance">Relevance</option>
              <option value="newest">Newest</option>
            </select>
          </label>
        </div>
        <Cards array={books} />
      </div>
    );
  };

export default MiApi;
