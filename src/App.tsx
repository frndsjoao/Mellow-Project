import React from 'react';

import Dashboard from './pages/Dashboard';
import Recipes from './pages/Recipes';
import GoGreen from './pages/GoGreen';
import HowItWorks from './pages/HowItWorks';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Dashboard />
    <Recipes />
    <GoGreen />
    <HowItWorks />

    <GlobalStyle />
  </>
);

export default App;
