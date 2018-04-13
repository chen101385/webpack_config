import React from 'react';
import ReactDOM from 'react-dom';
import ItemListEntry from './ItemListEntry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const item = {
    key: 'FILL_ME_IN',
  };
  ReactDOM.render(<ItemListEntry item={item} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
