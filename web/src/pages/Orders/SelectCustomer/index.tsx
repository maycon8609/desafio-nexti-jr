import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import Button from '../../../components/Botton';
import { Container, Footer, Logo, Body, Buttons } from './style';
import { FiPlusSquare } from 'react-icons/fi';

import ImageOrder from '../../../assets/order.svg';
import ProfileCliente from '../../../assets/profile-cliente.svg';
import api from '../../../services/api';

interface IResponseApi {
  id: string;
  name: string;
  cpf: string;
  date_birth: string;
}


const SelectCustomer: React.FC = () => {
  const [customers, setCustomers] = useState<IResponseApi[]>([]);


  useEffect(() => {
    api.get<IResponseApi[]>('/customers').then(response => {
      setCustomers(response.data);
    });
  }, []);

  return (
    < Container >
      <Footer>
        <Link to="/">
          <Logo>
            <img src={ImageOrder} alt="pedidos" />
          </Logo>
        </Link>
        <Buttons>
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
          {customers.map(customer => (
            <>
              <div key={customer.id} className="customer-container">
                <div className="profile">
                  <img src={ProfileCliente} alt="profile" />
                </div>

                <div className="customer">
                  <h2>{`Nome: ${customer.name}`}</h2>
                  <span>{`Cpf: ${customer.cpf}`}</span>
                  <span>{`Data de nascimento: ${customer.date_birth}`}</span>
                </div>

                <div className="icons">
                  <Link to={`/order/${customer.id}`}>
                    <FiPlusSquare color="#4cd137" size={18} />
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

export default SelectCustomer;