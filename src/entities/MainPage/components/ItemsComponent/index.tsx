import React from 'react';
import { useParams } from 'react-router-dom';
import EditorPage from '../../../EditorPage';

interface IProps {
  id: number;
  name: string;
  category: string;
  data: string;
  publication: string;
}

const ItemsComponent = () => {
  return <EditorPage />;
};

export default ItemsComponent;
