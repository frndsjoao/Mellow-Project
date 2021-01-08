import React from 'react';

import Foods from '../../assets/Main-page/Foods.png';

import Header from '../../components/Header';
import PlanCard from '../../components/PlanCard';

import { Container, Content, Cards } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <img src={Foods} alt="Foods" />

        <Content>
          <h1>Your subscription has expired...</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>

          <Cards>
            <PlanCard />
            <PlanCard />
            <PlanCard />
          </Cards>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
