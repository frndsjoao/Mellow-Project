import React from 'react';

import RecipeCard from '../../components/RecipeCard';

import { Container, TextContent, Carousel } from './styles';

const Recipes: React.FC = () => (
  <Container>
    <TextContent>
      <h1>Recipes</h1>
      <p>
        Culpa qui officia deserunt mollit anim id est laborum. Sed ut
        perspiciatis unde omnis iste natus error sit voluptartem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi ropeior architecto beatae vitae.
      </p>
    </TextContent>

    <Carousel>
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
    </Carousel>
  </Container>
);

export default Recipes;
