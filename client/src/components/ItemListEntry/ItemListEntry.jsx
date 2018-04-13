import React from 'react';
import PropTypes from 'prop-types';
import './ItemListEntry.less';

const ItemListEntry = ({ item }) => (
  <div>
    <h5>{item.key}</h5>
  </div>
);

ItemListEntry.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
  ])).isRequired,
};

export default ItemListEntry;
