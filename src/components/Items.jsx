import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export function Items() {

    const { id } = useParams() // obtener el id del producto desde la URL 
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch('/products.json')
          .then(response => response.json())
          .then(data => {
            console.log('Datos recibidos:', data); // Verifica la estructura de `data`
            if (data && Array.isArray(data.products)) {
              const foundProduct = data.products.find(p => p.id === parseInt(id, 10)); // parseInt(id, 10)); ---> convierte el valor id (se obtiene de los parametros de la url) en cadena de texto. el 10 asegura que el valor se interprete en base dcimal
              setProduct(foundProduct);
            } else {
              console.error('La propiedad `products` no es un array o está indefinida');
            }
          })
          .catch(error => console.error('Error al cargar el producto:', error));
      }, [id]);
      

    if (!product) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <main>
                <h1>{product.title}</h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <h2>Descripción</h2>
                        <p>{product.description}</p>
                    </div>
                    <div>
                        <h3>Detalles del producto</h3>
                        <p><strong>Precio:</strong> ${product.price}</p>
                        <p><strong>Marca:</strong> {product.brand}</p>
                        <p><strong>Stock:</strong> {product.stock}</p>
                        <p><strong>Categoría:</strong> {product.category}</p>
                    </div>
                    <div>
                        <h3>Imágenes</h3>
                        {product.images.map((image, index) => (
                            <img key={index} src={image} alt={`${product.title} ${index}`} style={{ width: '200px', marginBottom: '10px' }} />
                        ))}
                    </div>
                    <button onClick={() => alert('Funcionalidad de compra no implementada')}>Comprar</button>
                </div>
            </main>
        </>
    )

}