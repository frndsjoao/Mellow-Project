import React from 'react';

import Icon from '../../assets/Main-page/Icon-01.png';

import Button from '../Button';

import { Container, Infos } from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <h2>Plan 01</h2>
      <p>7 Days Trial</p>
      <img src={Icon} alt="PlanImage" />
      <Infos>
        <div>
          <p>Users</p>
          <p>-</p>
        </div>
        <div>
          <p>Save Recipes</p>
          <p>-</p>
        </div>
        <div>
          <p>Manage Purchase</p>
          <p>-</p>
        </div>
        <div>
          <p>Compare Price</p>
          <p>-</p>
        </div>
        <div>
          <p>New recipes every week</p>
          <p>-</p>
        </div>
      </Infos>
      <Button type="submit">LET&apos;S TRY</Button>
    </Container>
  );
};

export default Card;
