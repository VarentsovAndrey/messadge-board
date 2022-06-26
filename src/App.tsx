import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLayout from './assets/PageLayout';
import './assets/scss/normalize.scss';
import EditorPage from './entities/EditorPage';
import MainPage from './entities/MainPage';
import ItemsComponent from './entities/MainPage/components/ItemsComponent';

import ButtonAdd from './shared/ButtonAdd';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="main_page" element={<MainPage />} />
        <Route path="main_page/:id" element={<ItemsComponent />} />
        {/* <Route path="/editor_page" element={<EditorPage />} /> */}
      </Routes>
    </PageLayout>
  );
};

export default App;
