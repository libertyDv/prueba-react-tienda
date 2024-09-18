// Home.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/items?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <div>
            <h1>Buscar Productos</h1>
            <form onSubmit={handleSearch}>
                <input 
                    type="text" 
                    placeholder="Buscar productos..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                <button type="submit">Buscar</button>
            </form>
        </div>
    );
}

