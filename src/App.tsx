import React from 'react';
import PageLayout from './assets/PageLayout';
import './assets/scss/normalize.scss';
import EditorPage from './entities/EditorPage';
import MainPage from './entities/MainPage';
import ButtonAdd from './shared/ButtonAdd';

const App = () => {
  return (
    <PageLayout>
      {/* <MainPage /> */}
      <EditorPage />
    </PageLayout>
  );
};

export default App;
