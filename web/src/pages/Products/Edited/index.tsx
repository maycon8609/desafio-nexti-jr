import React, { ChangeEvent, useState } from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

import Button from '../../../components/Botton';
import { Container, Footer, Logo, Body, Buttons } from './style';

import ImageProduct from '../../../assets/product.svg';
import api from '../../../services/api';

interface FormProps {
  sku: Number;
  name: string;
  description: string;
  price: Number;
  quantity: Number;
}

interface IRouteParams {
  id: string;
}

const CustomerEdited: React.FC = () => {
  const { params } = useRouteMatch<IRouteParams>();

  const [skuForm, setSkuForm] = useState<Number>(0);
  const [nameForm, setNameForm] = useState<string>('');
  const [descriptionForm, setDescriptionForm] = useState<string>('');
  const [priceForm, setPriceForm] = useState<Number>(0);
  const [quantityForm, setQuantityForm] = useState<Number>(0);

  function handleSetSku(event: ChangeEvent<HTMLInputElement>) {
    const sku = event.target.value;

    setSkuForm(Number(sku));
  }

  function handleSetName(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;

    setNameForm(name);
  }


  function handleSetDescription(event: ChangeEvent<HTMLInputElement>) {
    const description = event.target.value;

    setDescriptionForm(description);
  }

  function handleSetPrice(event: ChangeEvent<HTMLInputElement>) {
    const price = event.target.value;

    setPriceForm(Number(price));
  }

  function handleSetQuantity(event: ChangeEvent<HTMLInputElement>) {
    const quantity = event.target.value;

    setQuantityForm(Number(quantity));
  }

  async function handleEditeProduct() {
    if (skuForm && priceForm && quantityForm !== 0 && nameForm && descriptionForm !== '') {

      const serializedData: FormProps = {
        sku: skuForm,
        name: nameForm,
        description: descriptionForm,
        price: priceForm,
        quantity: quantityForm
      }

      await api.put(`/products/${params.id}`, serializedData);
    }


  }

  return (
    <Container>
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
            <Button color="transparent">PRODUTOS</Button>
          </Link>

          <Link to="/orders">
            <Button color="transparent">PEDIDOS</Button>
          </Link>
        </Buttons>
      </Footer>

      <Body>
        <div className="inputs">
          <div className="field-group">
            <div className="field">
              <label htmlFor="sku">Sku</label>
              <input
                type="number"
                name="sku"
                id="sku"
                placeholder="Sku do produto"
                onChange={handleSetSku}
              />
            </div>

            <div className="field">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nome do produto"
                onChange={handleSetName}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Descrição do produto"
              onChange={handleSetDescription}
            />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="price">Valor</label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Valor do produto"
                onChange={handleSetPrice}
              />
            </div>

            <div className="field">
              <label htmlFor="quantity">Quantidade</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                placeholder="Quantidade"
                onChange={handleSetQuantity}
              />
            </div>
          </div>

          <div className="options">
            <Link to="/customers-list">
              <Button color="#C23616">LISTAR</Button>
            </Link>

            <Link to="/products">
              <Button color="#C23616"
                onClick={handleEditeProduct}
              >EDITAR</Button>
            </Link>
          </div>
        </div>
      </Body>
    </Container>
  );
};

export default CustomerEdited;