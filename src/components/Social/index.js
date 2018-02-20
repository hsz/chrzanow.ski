import React from 'react';
import PropTypes from 'prop-types';

const Social = ({ name, description, url, icon }) => (
  <div>Social item</div>
);

Social.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Social;
