import React from 'react';
import PageLayout from './assets/PageLayout';
import './assets/scss/normalize.scss';
import MainPage from './entities/MainPage';
import ButtonAdd from './shared/ButtonAdd';

const App = () => {
  return (
    <PageLayout>
      <MainPage />
    </PageLayout>
  );
};

export default App;
