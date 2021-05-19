import React from 'react';
import PropTypes from 'prop-types';

const MyDogs = ({ dog }) => (
  <>
    <h3>this will render my dogs</h3>
    <h4>{dog.name}</h4>
  </>
);

MyDogs.propTypes = {
  dog: PropTypes.instanceOf(Object).isRequired,
};

export default MyDogs;
