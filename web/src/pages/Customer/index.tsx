import React, { ChangeEvent, useState } from 'react';

import { Link } from 'react-router-dom';

import Button from '../../components/Botton';
import { Container, Footer, Logo, Body, Buttons } from './style';

import ImageCliente from '../../assets/cliente.svg';
import api from '../../services/api';

interface FormProps {
  name: string;
  cpf: string;
  date_birth: Date;
}

const Customer: React.FC = () => {
  const [nameForm, setNameForm] = useState('');
  const [cpfForm, setCpfForm] = useState('');
  const [dateBirthForm, setDateBirthForm] = useState('');

  function stringToDate(stringDate: string): Date {
    const stringDateArray = stringDate.split('/');
    const date = new Date(
      Number(stringDateArray[2]),
      Number(stringDateArray[1]),
      Number(stringDateArray[0]));
    return date;
  }

  function handleSetName(event: ChangeEvent<HTMLInputElement>) {
    const name = event.target.value;

    setNameForm(name);
  }

  function handleSetCpf(event: ChangeEvent<HTMLInputElement>) {
    const cpf = event.target.value;

    setCpfForm(cpf);
  }

  function handleSetdateBirth(event: ChangeEvent<HTMLInputElement>) {
    const dateBirth = event.target.value;

    setDateBirthForm(dateBirth);
  }

  async function handleCreateCustomer() {
    if (nameForm && cpfForm && dateBirthForm !== '') {
      const formatDate = stringToDate(dateBirthForm);

      const serializedData: FormProps = {
        name: nameForm,
        cpf: cpfForm,
        date_birth: new Date(formatDate),
      }

      await api.post('/customers', serializedData);
    }


  }

  return (
    <Container>
      <Footer>
        <Logo>
          <img src={ImageCliente} alt="cliente" />
        </Logo>
        <Buttons>
          <Link to="/products">
            <Button color="transparent">PRODUTOS</Button>
          </Link>

          <Link to="/orders">
            <Button color="transparent">PEDIDOS</Button>
          </Link>
        </Buttons>
      </Footer>

      <Body>
        <div className="inputs">
          <div className="field">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nome"
              onChange={handleSetName}
            />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="cpf">Cpf</label>
              <input
                type="text"
                name="cpf"
                id="cpf"
                placeholder="Onze digitos do cpf"
                onChange={handleSetCpf}
              />
            </div>

            <div className="field">
              <label htmlFor="date_birth">Data de nascimento</label>
              <input
                type="text"
                name="date_birth"
                id="date_birth"
                placeholder="Ex.. 20/10/1997"
                onChange={handleSetdateBirth}
              />
            </div>
          </div>

          <div className="options">
            <Link to="/customers-list">
              <Button color="#0097E6">LISTAR</Button>
            </Link>

            <Link to="/">
              <Button color="#0097E6"
                onClick={handleCreateCustomer}
              >CRIAR</Button>
            </Link>
          </div>
        </div>
      </Body>
    </Container>
  );
};

export default Customer;