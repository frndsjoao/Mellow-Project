import React from 'react';
import BellPepper from '../../assets/Go-green/GoGreen.png';
import Tesco from '../../assets/Go-green/Logos/Tesco.svg';
import Waitrose from '../../assets/Go-green/Logos/Waitrose.svg';
import Ocado from '../../assets/Go-green/Logos/Ocado.svg';

import { Container, InfoContent } from './styles';

const GoGreen: React.FC = () => (
  <Container>
    <img src={BellPepper} alt="" />
    <InfoContent>
      <div>
        <h1>Go Green</h1>
        <p>
          Culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptartem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi ropeior architecto beatae vitae dicta
          sunt explicabo. Nemo eniem ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut.
        </p>
        <div className="sponsors">
          <img src={Waitrose} alt="" />
          <img src={Tesco} alt="" />
          <img src={Ocado} alt="" />
        </div>
      </div>
      <div>
        <h1>About us</h1>
        <p>
          Culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptartem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi ropeior architecto beatae vitae dicta
          sunt explicabo. Nemo eniem ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut.
        </p>
      </div>
    </InfoContent>
  </Container>
);

export default GoGreen;
