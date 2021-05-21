import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPaw } from '@fortawesome/free-solid-svg-icons';
import { getOneDog, updateDog } from '../actions/dogsActions';
import { loadPlayHourDog } from '../actions/playHoursActions';
import PlayTimeForm from '../components/PlayTimeForm';
import CommonLinks from '../common/CommonLinks';
import TrackerStyle from '../styles/OneDog.module.css';
import HoursToday from './HoursToday';

const OneDog = ({
  match, getDog, onlyDog, updatePlayDog, getHours, myHours,
}) => {
  useEffect(() => {
    getDog(match.params.id);
    getHours(match.params.id);
  }, []);

  const [invisible, setInvisible] = useState(false);

  const handleClick = () => {
    if (invisible === false) {
      setInvisible(true);
    } else {
      setInvisible(false);
    }
  };

  return (
    <div className={TrackerStyle.containerTotal}>
      <div className={TrackerStyle.container}>
        <div className={TrackerStyle.containerTitle}>
          <FontAwesomeIcon icon={faPaw} size="5x" className={TrackerStyle.paw} />
          <h1>Your friend</h1>
        </div>
        <div>
          <h3 className={TrackerStyle.title}>Name of your friend:</h3>
          <p className={TrackerStyle.text}>{onlyDog.name}</p>
        </div>
        <div>
          <h3 className={TrackerStyle.title}>Breed of your friend:</h3>
          <p className={TrackerStyle.text}>{onlyDog.breed}</p>
        </div>
        <div className={TrackerStyle.playTime}>
          <h3 className={TrackerStyle.title}>Weekly play time of your friend (approx):</h3>
          {
            onlyDog.regular_play_time
              ? (
                <>
                  <div>
                    <p className={TrackerStyle.text}>{ `${onlyDog.regular_play_time} hours`}</p>
                  </div>
                  { myHours.length > 0
                    ? (<HoursToday weeklyPlayTime={onlyDog.regular_play_time} myHours={myHours} />)
                    : <div />}
                </>
              )
              : (
                <div>
                  <p>Add weekly play time</p>
                  <FontAwesomeIcon icon={faPlus} role="presentation" onClick={handleClick} className={TrackerStyle.plus} />
                </div>
              )
            }
        </div>
        { invisible ? <PlayTimeForm id={match.params.id} UpdatePlay={updatePlayDog} /> : <div /> }
        <Link to="/profile" className={TrackerStyle.back}>Back</Link>
      </div>
      <CommonLinks />
    </div>
  );
};

const mapStateToProps = (state) => ({
  onlyDog: state.oneDog,
  myHours: state.HoursDog,
});

const mapDispatchToProps = (dispatch) => ({
  getDog: (id) => dispatch(getOneDog(id)),
  updatePlayDog: (dog) => dispatch(updateDog(dog)),
  getHours: (id) => dispatch(loadPlayHourDog(id)),
});

OneDog.propTypes = {
  onlyDog: PropTypes.instanceOf(Object).isRequired,
  getDog: PropTypes.func.isRequired,
  match: PropTypes.instanceOf(Object).isRequired,
  updatePlayDog: PropTypes.func.isRequired,
  myHours: PropTypes.instanceOf(Array).isRequired,
  getHours: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(OneDog);
