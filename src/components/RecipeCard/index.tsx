import React from 'react';

import Poke from '../../assets/Recipes/Poke.png';
import Button from '../Button';

import { Container, InfoContent } from './styles';

const RecipeCard: React.FC = () => {
  return (
    <Container>
      <img src={Poke} alt="" />
      <InfoContent>
        <h2>Recipe name goes here</h2>
        <p>
          Culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptartem accusantium
          doloremque laudantium.
        </p>
        <Button type="button">GO TO RECIPE</Button>
      </InfoContent>
    </Container>
  );
};

export default RecipeCard;
