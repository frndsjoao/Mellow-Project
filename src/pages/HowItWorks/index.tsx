import React from 'react';

import Green from '../../assets/How-it-works/Green.png';
import Watermelon from '../../assets/How-it-works/Watermelon.png';
import { Container, InfoContent } from './styles';

const HowItWorks: React.FC = () => (
  <Container>
    <img src={Green} alt="" />
    <InfoContent>
      <h1>How it works</h1>
      <p>
        Culpa qui officia deserunt mollit anim id est laborum. Sed ut
        perspiciatis unde omnis iste natus error sit voluptartem accusantium
        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        inventore veritatis et quasi ropeior architecto beatae vitae dicta sunt
        explicabo. Nemo eniem ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut.
      </p>
    </InfoContent>
    <img src={Watermelon} alt="" />
  </Container>
);

export default HowItWorks;
