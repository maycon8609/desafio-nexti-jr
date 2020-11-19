import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';

import Button from '../../../components/Botton';
import { Container, Footer, Logo, Body, Buttons } from './style';

import ImageProduct from '../../../assets/product.svg';
import ProfileCliente from '../../../assets/profile-cliente.svg';

import api from '../../../services/api';

interface IResponseApi {
  id: string;
  sku: Number;
  name: string;
  description: string;
  price: Number;
  quantity: Number;
}


const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<IResponseApi[]>([]);


  useEffect(() => {
    api.get<IResponseApi[]>('/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  async function handleDeleteProducts(productId: string) {
    await api.delete(`/products/${productId}`);

    setProducts(products.filter(product => product.id !== productId));
  }

  return (
    < Container >
      <Footer>
        <Link to="/">
          <Logo>
            <img src={ImageProduct} alt="cliente" />
          </Logo>
        </Link>
        <Buttons>
          <Link to="/products">
            <Button color="transparent">VOLTAR</Button>
          </Link>

          <Link to="/customers">
            <Button color="transparent">CLIENTES</Button>
          </Link>

          <Link to="/orders">
            <Button color="transparent">PEDIDOS</Button>
          </Link>

        </Buttons>
      </Footer>

      <Body>
        <div className="container">
          {products.map(product => (
            <>
              <div key={product.id} className="product-container">
                <div className="profile">
                  <img src={ProfileCliente} alt="profile" />
                </div>

                <div className="product">
                  <span>{`Sku: ${product.sku}`}</span>
                  <span>{`Nome: ${product.name}`}</span>
                  <span>{`Descrição: ${product.description}`}</span>
                  <span>{`Preço: ${product.price}`}</span>
                  <span>{`Quantidade: ${product.quantity}`}</span>
                </div>

                <div className="icons">
                  <button>
                    <FiTrash2 color="#c23616" size={18} onClick={() => handleDeleteProducts(product.id)} />
                  </button>
                  <Link to={`/product-edited/${product.id}`}>
                    <FiEdit3 color="#44bd32" size={18} />
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </Body>
    </Container >
  );
};

export default ProductsList;