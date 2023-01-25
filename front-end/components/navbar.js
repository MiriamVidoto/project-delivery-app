import React from 'react';
//o componente recebe dois parâmetros o nome do usuário recuperado do localStorage 
// e o path para determinar quais links deve renderizar
// Fluxo customer tem dois links: PRODUTOS e MEUS PEDIDOS
// Fluxo seller tem um link: PEDIDOS
//Falta os data tests

export default function NavBar(name, path) {

  return (
    <div>
      { path === 'customer' && (
      <div>
          <Link to= '/customer/products' data-testid='customer_products__element-navbar-link-products'>PRODUTOS</Link>
          <Link to= '/customer/orders' data-testid='customer_products__element-navbar-link-orders'>MEUS PEDIDOS</Link>
        </div>
      )
      }
      { path === 'seller' && (
        <Link to= '/seller/orders'>PEDIDOS</Link>
      )
      }
      <p data-testid='customer_products__element-navbar-user-full-name'>{ name } </p>
      <button data-testid='customer_products__element-navbar-link-logout'>Sair</button>
    </div>
  )

}