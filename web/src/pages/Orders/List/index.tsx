import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import Button from '../../../components/Botton';
import { Container, Footer, Logo, Body, Buttons } from './style';

import ImageOrder from '../../../assets/order.svg';
import api from '../../../services/api';

interface IResponseCustomers {
  id: string;
  name: string;
  cpf: string;
  date_birth: string;
}

interface IResponseProducts {
  id: string;
  sku: Number;
  name: string;
  description: string;
  price: Number;
  quantity: Number;
}
interface IOrderProducts {
  id: string;
  product_id: string;
  price: string;
  quantity: Number;
}

interface IResponseOrders {
  id: string;
  customer_id: string;
  order_products: IOrderProducts[];
}



const CustomersList: React.FC = () => {
  const [customers, setCustomers] = useState<IResponseCustomers[]>([]);
  const [products, setProducts] = useState<IResponseProducts[]>([]);
  const [orders, setOrders] = useState<IResponseOrders[]>([]);


  useEffect(() => {
    Promise.all([
      api.get<IResponseCustomers[]>('/customers').then(response => {
        setCustomers(response.data);
      }),

      api.get<IResponseProducts[]>('/products').then(response => {
        setProducts(response.data);
      }),

      api.get<IResponseOrders[]>('/orders').then(response => {
        setOrders(response.data);
      }),
    ]);
  }, []);
  
  function handleCustomerName(customerId: string): string {
    const customer = customers.find(customer => customer.id === customerId);

    if (customer) {
      return customer?.name
    }

    return 'Customer Name'
  }

  function handleProductName(productId: string): string {
    const product = products.find(product => product.id === productId);

    if (product) {
      return product?.name
    }

    return 'Product Name'
  }

  async function handleDeleteOrder(orderId: string) {
    await api.delete(`/orders/${orderId}`);

    setOrders(orders.filter(order => order.id !== orderId));
  }

  return (
    < Container >
      <Footer>
        <Link to="/">
          <Logo>
            <img src={ImageOrder} alt="pedidos" />
          </Logo>
        </Link>
        <Buttons>
          <Link to="/order">
            <Button color="transparent">VOLTAR</Button>
          </Link>

          <Link to="/products">
            <Button color="transparent">PRODUTOS</Button>
          </Link>

          <Link to="/customers">
            <Button color="transparent">CLIENTES</Button>
          </Link>

        </Buttons>
      </Footer>

      <Body>
        <div className="container">
          {orders.map(order => (
            <>
              <div key={order.id} className="order-container">
                <div className="order">
                  <span>{`Nome: ${handleCustomerName(order.customer_id)}`}</span>
                  {order.order_products.map(product => (
                    <>
                      <div key={product.id} className="products">
                        <span>{`Produto: ${handleProductName(product.product_id)}`}</span>
                        <div className="detail">
                          <span>{`Quantidade: ${product.quantity}`}</span>
                          <span>{`Valor Unitario: ${product.price}`}</span>
                        </div>
                      </div>
                    </>
                  ))}
                </div>

                <div className="icons">
                  <button>
                    <FiTrash2 color="#c23616" size={18} onClick={() => handleDeleteOrder(order.id)} />
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </Body>
    </Container >
  );
};

export default CustomersList;