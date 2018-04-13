import React from 'react';
import ReactDOM from 'react-dom';
import ItemList from './ItemList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const items = [
    {
      id: 1,
      key: 'FILL_ME_IN',
    },
    {
      id: 2,
      key: 'FILL_ME_IN',
    },
  ];
  ReactDOM.render(<ItemList items={items} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
