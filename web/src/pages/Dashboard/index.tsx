import React from 'react';

import Button from '../../components/Botton';
import { Container, Header, Logo, Buttons, Body, Text, Image } from './style';

import ImageHome from '../../assets/imageHome.svg';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <h1>NEXTI</h1>
        </Logo>
        <Buttons>
          <Link to="/customers">
            <Button color="#0097E6">CLIENTES</Button>
          </Link>

          <Link to="/products">
            <Button color="#C23616">PRODUTOS</Button>
          </Link>

          <Link to="/order">
            <Button color="#273C75">PEDIDOS</Button>
          </Link>
        </Buttons>
      </Header>

      <Body>
        <Text>
          <h1>OLÁ SEJA BEM VINDO</h1><br />
          <p>
            What is Lorem Ipsum?<br />
             Lorem Ipsum is simply dummy text of the printing and
             typesetting industry. Lorem Ipsum has been the industry's
             standard dummy text ever since the 1500.
          </p>
        </Text>
        <Image>
          <img src={ImageHome} alt="home" />
        </Image>
      </Body>
    </Container>
  );
};

export default Dashboard;