import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TrackerStyle from '../styles/PlayTimeForm.module.css';

const PlayTimeForm = ({ id, UpdatePlay }) => {
  const [hours, setHours] = useState('');

  const handleChange = (event) => {
    const updateHours = event.target.value;
    setHours(updateHours);
  };

  const handleValidation = () => {
    if (hours === '' || hours === '0') {
      return;
    }
    const updateDog = {
      id,
      playTime: parseInt(hours, 10),
    };
    UpdatePlay(updateDog);
  };

  return (
    <div className={TrackerStyle.containerTotal}>
      <form onSubmit={handleValidation} className={TrackerStyle.container}>
        <label htmlFor="hour" className={TrackerStyle.label}>
          How many hours weekly do you spend playing with your dog (aprox):
          <input className={TrackerStyle.inputs} id="hour" type="number" value={hours} name="hour" onChange={handleChange} placeholder="0" />
        </label>
        <button className={TrackerStyle.btn} type="submit">Submit</button>
      </form>
    </div>
  );
};

PlayTimeForm.propTypes = {
  id: PropTypes.string.isRequired,
  UpdatePlay: PropTypes.func.isRequired,
};

export default PlayTimeForm;
