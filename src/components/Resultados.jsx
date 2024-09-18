import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export function Resultados() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search');

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    // Cargar los productos desde el archivo JSON
    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => {
                console.log('Datos cargados:', data.products);
                setProducts(data.products);
            })
            .catch(error => console.error('Error al cargar productos:', error));
    }, []);

    // Filtrar los productos según la búsqueda
    useEffect(() => {
        // Array.isArray(products)  ---------> verifica si products es un array
        // && searchQuery) -------------> verifica si searchQuery tiene un valor truthy (no es null, undefined, etc)
        if (Array.isArray(products) && searchQuery) { 
            const filtered = products.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            console.log('Productos filtrados:', filtered);
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    }, [searchQuery, products]);

    return (
        <main>
            <h1>Resultados de búsqueda</h1>

            {searchQuery && (
                <p>Resultados para: <strong>{searchQuery}</strong></p>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                            {/* Mostrar la imagen de `thumbnail` */}
                            {product.thumbnail && (
                                <img src={product.thumbnail} alt={product.title} style={{ width: '150px' }} />
                            )}
                            <h2>{product.title}</h2>
                            <p><strong>Categoría:</strong> {product.category}</p>
                            <p><strong>Descripción:</strong> {product.description}</p>
                            <p><strong>Precio:</strong> ${product.price}</p>
                            <p><strong>Puntuación:</strong> {product.rating}</p>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron productos.</p>
                )}
            </div>
        </main>
    );
}
