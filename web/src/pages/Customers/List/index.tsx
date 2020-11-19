import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit3 } from 'react-icons/fi';

import Button from '../../../components/Botton';
import { Container, Footer, Logo, Body, Buttons } from './style';

import ImageCliente from '../../../assets/cliente.svg';
import ProfileCliente from '../../../assets/profile-cliente.svg';
import api from '../../../services/api';

interface IResponseApi {
  id: string;
  name: string;
  cpf: string;
  date_birth: string;
}


const CustomersList: React.FC = () => {
  const [customers, setCustomers] = useState<IResponseApi[]>([]);


  useEffect(() => {
    api.get<IResponseApi[]>('/customers').then(response => {
      setCustomers(response.data);
    });
  }, []);

  async function handleDeleteCustomer(customerId: string) {
    await api.delete(`/customers/${customerId}`);

    setCustomers(customers.filter(customer => customer.id !== customerId));
  }

  return (
    < Container >
      <Footer>
        <Link to="/">
          <Logo>
            <img src={ImageCliente} alt="cliente" />
          </Logo>
        </Link>
        <Buttons>
          <Link to="/customers">
            <Button color="transparent">VOLTAR</Button>
          </Link>

          <Link to="/products">
            <Button color="transparent">PRODUTOS</Button>
          </Link>

          <Link to="/orders">
            <Button color="transparent">PEDIDOS</Button>
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
                  <button>
                    <FiTrash2 color="#c23616" size={18} onClick={() => handleDeleteCustomer(customer.id)} />
                  </button>
                  <Link to={`/customer-edited/${customer.id}`}>
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

export default CustomersList;