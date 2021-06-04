import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import TrackerStyle from '../styles/MyDogs.module.css';

const MyDogs = ({ dog }) => (
  <Link to={`/dog/${dog.id}`} className={TrackerStyle.card}>
    <FontAwesomeIcon icon={faPaw} size="2x" className={TrackerStyle.paw} />
    <h4 className={TrackerStyle.dog}>{dog.name}</h4>
  </Link>
);

MyDogs.propTypes = {
  dog: PropTypes.instanceOf(Object).isRequired,
};

export default MyDogs;
