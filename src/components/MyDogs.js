import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import TrackerStyle from '../styles/MyDogs.module.css';

const MyDogs = ({ dog }) => (
  <div className={TrackerStyle.card}>
    <FontAwesomeIcon icon={faPaw} size="2x" className={TrackerStyle.paw} />
    <h4 className={TrackerStyle.dog}>{dog.name}</h4>
  </div>
);

MyDogs.propTypes = {
  dog: PropTypes.instanceOf(Object).isRequired,
};

export default MyDogs;
