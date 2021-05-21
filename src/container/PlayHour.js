import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createPlayHour } from '../actions/playHoursActions';
import CommonLinks from '../common/CommonLinks';
import TrackerStyle from '../styles/Forms.module.css';

const useDidUpdate = (callback, deps) => {
  const hasMount = useRef(false);

  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  }, deps);
};

const HourPlayForm = ({ hourCreate, hourSuccess, AllMyDogs }) => {
  const [hourPlay, setHourPlay] = useState({
    hour: '',
    date: '',
    dog: '',
  });

  const [invalidForm, setInvalidform] = useState(false);

  const history = useHistory();

  const toProfile = () => {
    history.push('/profile');
  };

  useDidUpdate(() => {
    toProfile();
  }, [hourSuccess]);

  const handleChange = (event) => {
    const updateHour = { ...hourPlay, [event.target.name]: event.target.value };
    setHourPlay(updateHour);
  };

  const handleValidation = () => {
    if (hourPlay.hour === '' || hourPlay.date === '' || hourPlay.dog === '' || hourPlay.hour === '0') {
      setInvalidform(true);
      return;
    }
    const hourNumeric = parseInt(hourPlay.hour, 10);
    setHourPlay({ ...hourPlay, hour: hourNumeric });
    hourCreate(hourPlay);
  };

  const handleSpan = () => {
    setInvalidform(false);
  };

  return (
    <div className={TrackerStyle.containerTotal}>
      <form className={TrackerStyle.container}>
        <label htmlFor="hour" className={TrackerStyle.label}>
          Add hour for play with your dog:
          <input className={TrackerStyle.inputs} id="hour" type="number" value={hourPlay.hour} name="hour" onChange={handleChange} placeholder="E.g. 2" />
        </label>
        <label htmlFor="dayplay" className={TrackerStyle.label}>
          When did you make it:
          <input className={TrackerStyle.inputs} id="dayplay" type="date" value={hourPlay.date} name="date" onChange={handleChange} />
        </label>
        <label className={TrackerStyle.label} htmlFor="dogs">
          Select the dog that you will spend time:
          <select
            id="dogs"
            name="dog"
            value={hourPlay.dog}
            onChange={handleChange}
            className={TrackerStyle.inputs}
          >
            <option value="" disabled>
              Your dogs...
            </option>
            {AllMyDogs.map((dog) => (
              <option key={dog.name} value={dog.id}>
                {dog.name}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={handleValidation} className={TrackerStyle.btn}>Submit</button>
      </form>
      {
      invalidForm
        ? (
          <div
            onMouseOver={handleSpan}
            onFocus={handleSpan}
            className={TrackerStyle.invalid}
          >
            invalid form
          </div>
        )
        : <div />
      }
      <Link to="/profile" className={TrackerStyle.back}>Back</Link>
      <CommonLinks />
    </div>
  );
};

const mapStateToProps = (state) => ({
  hourSuccess: state.createdReducer,
  AllMyDogs: state.dogs,
});

const mapDispatchToProps = (dispatch) => ({
  hourCreate: (hourPlay) => dispatch(createPlayHour(hourPlay)),
});

HourPlayForm.propTypes = {
  hourCreate: PropTypes.func.isRequired,
  hourSuccess: PropTypes.instanceOf(Array).isRequired,
  AllMyDogs: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(HourPlayForm);
