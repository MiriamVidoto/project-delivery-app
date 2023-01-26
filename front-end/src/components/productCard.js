import React, { useState, useEffect} from "react";

const ProductCard = () => {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            url_image: 'https://via.placeholder.com/150',
            price: 19.99
        },
        {
            id: 2,
            name: 'Product 2',
            url_image: 'https://via.placeholder.com/150',
            price: 29.99
        },
        {
            id: 3,
            name: 'Product 3',
            url_image: 'https://via.placeholder.com/150',
            price: 39.99
        },
        {
            id: 4,
            name: 'Product 4',
            url_image: 'https://via.placeholder.com/150',
            price: 49.99
        },
        {
            id: 5,
            name: 'Product 5',
            url_image: 'https://via.placeholder.com/150',
            price: 59.99
        },
        {
            id: 6,
            name: 'Product 6',
            url_image: 'https://via.placeholder.com/150',
            price: 69.99
        },
        {
            id: 7,
            name: 'Product 7',
            url_image: 'https://via.placeholder.com/150',
            price: 79.99
        },
        {
                id: 8,
                name: 'Product 8',
                url_image: 'https://via.placeholder.com/150',
                price: 89.99
            },
        {
            id: 9,
            name: 'Product 9',
            url_image: 'https://via.placeholder.com/150',
            price: 99.99
        },
        {
            id: 10,
            name: 'Product 10',
            url_image: 'https://via.placeholder.com/150',
            price: 109.99
        },
        {
            id: 11,
            name: 'Product 11',
            url_image: 'https://via.placeholder.com/150',
            price: 119.99
        }
    ];
    const [quantities, setQuantities] = useState([]);
    // quantidade de produtos começa vazio

    useEffect(() => {
        setQuantities(products.map(() => 0)); // adiciona quantities state em cada product iniciando em 0
    }, []); // [] define que a re-renderização vai ocorrer só quando montar
    
    return (
        <div>

            {products.map((product, index) => (
                <div data-testid={`customer_products__img-card-bg-image-${product.id}`} key={product.id}>
                    <img src={product.url_image} alt={product.name} data-testid={`customer_products__img-card-bg-image-${product.id}`} />
                    <h2 data-testid={`customer_products__element-card-title-${product.id}`}>{product.name}</h2>
                    <p data-testid={`customer_products__element-card-price-${product.id}`}>Price: {product.price}</p>

                    {/* botões */}
                    {/* <div> */}
                        {/* remove itens */}
                        <button data-testid={`customer_products__button-card-rm-item-${product.id}`} onClick={() => {
                            const newQuantities = [...quantities];
                            newQuantities[index] = Math.max(newQuantities[index] - 1, 0); {/* impede que o numero fique negativo, definindo o máximo (no caso mínimo) como 0*/}
                            setQuantities(newQuantities);
                        }} disabled={quantities[index] === 0}>-</button>  {/* desabilita quando chega a 0*/}

                       
                        <div data-testid={`customer_products__input-card-quantity-${product.id}`}>{quantities[index]}</div>

                        {/* adds itens */}
                        <button data-testid={`customer_products__button-card-add-item-${product.id}`} onClick={() => {
                            const newQuantities = [...quantities];
                            newQuantities[index]++;
                            setQuantities(newQuantities);
                        }}>+</button>
                    </div>

                // </div>
            ))}
        </div>
    );
};

export default ProductCard;