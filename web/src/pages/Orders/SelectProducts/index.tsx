import React, { useEffect, useState } from 'react';

import { Link, useRouteMatch } from 'react-router-dom';
import { FiPlusSquare, FiMinusSquare, FiTrash } from 'react-icons/fi';

import Button from '../../../components/Botton';
import { Container, Footer, Logo, Body, Buttons } from './style';

import ImageOrder from '../../../assets/order.svg';
import ProfileCliente from '../../../assets/profile-cliente.svg';

import api from '../../../services/api';

interface IResponseApi {
  id: string;
  sku: Number;
  name: string;
  description: string;
  price: Number;
};

interface IProducts {
  id: string;
  quantity: number;
};

interface ICreateOrder {
  customer_id: string;
  products: IProducts[];
}

interface IRouteParams {
  id: string;
};


const SelectProducts: React.FC = () => {
  const { params } = useRouteMatch<IRouteParams>();

  const [products, setProducts] = useState<IResponseApi[]>([]);
  const [productsForm, setProductsForm] = useState<IProducts[]>([]);

  useEffect(() => {
    api.get<IResponseApi[]>('/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  function handleAddProduct(productId: string): void {
    const indexProduct = productsForm.findIndex(product => product.id === productId);
    const productArray = productsForm;

    if (indexProduct === -1) {
      setProductsForm([...productsForm, {
        id: productId,
        quantity: 1,
      }]);
    } else {
      productArray[indexProduct].quantity += 1;
      setProductsForm(productArray);
    }
  }

  function handleRemoveProduct(productId: string): void {
    const indexProduct = productsForm.findIndex(product => product.id === productId);
    const productArray = productsForm;

    if (indexProduct === -1) {
      alert('Produto fora do carrinho');
    } else if (productArray[indexProduct].quantity === 1) {
      handleDeleteProduct(productId);
    } else {
      productArray[indexProduct].quantity -= 1;
      setProductsForm(productArray);
    }
  }

  function handleDeleteProduct(productId: string) {
    setProductsForm(productsForm.filter(product => product.id !== productId))
  }

  function handleResetCart() {
    setProductsForm([]);
  }

  async function handleCreateOrder() {
    const serializedData: ICreateOrder = {
      customer_id: params.id,
      products: productsForm,
    }
    await api.post('/orders', serializedData);
    setProductsForm([]);
    alert('Pedido criado com sucesso...');
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
          <Link to="/orders">
            <Button color="transparent">VOLTAR</Button>
          </Link>

          <Link to="/customers">
            <Button color="transparent">CLIENTES</Button>
          </Link>

        </Buttons>
      </Footer>

      <Body>
        <div className="container">
          <div className="confirmation">
            <button className="reset" onClick={() => handleResetCart()}>ZERAR CARRINHO</button>
            <Link to="/orders-list">
              <button className="confirm" onClick={() => handleCreateOrder()}>CONFIRMAR</button>
            </Link>
          </div>
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
                  </div>

                  <div className="icons">
                    <button>
                      <FiPlusSquare color="#273C75" size={18} onClick={() => handleAddProduct(product.id)} />
                    </button>
                    <button>
                      <FiMinusSquare color="#fbc531" size={18} onClick={() => handleRemoveProduct(product.id)} />
                    </button>
                    <button >
                      <FiTrash color="#c23616" size={18} onClick={() => handleDeleteProduct(product.id)} />
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

export default SelectProducts;