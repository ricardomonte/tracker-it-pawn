import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createDog } from '../actions/dogsActions';
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

const DogForm = ({ dogCreate, dogSuccess }) => {
  const [dog, setDog] = useState({
    name: '',
    breed: '',
    kilograms: '',
  });

  const [invalidForm, setInvalidform] = useState(false);

  const history = useHistory();

  const toProfile = () => {
    history.push('/profile');
  };

  useDidUpdate(() => {
    toProfile();
  }, [dogSuccess]);

  const handleChange = (event) => {
    const updateDog = { ...dog, [event.target.name]: event.target.value };
    setDog(updateDog);
  };

  const handleValidation = () => {
    if (dog.name === '' || dog.breed === '' || dog.kilograms === '' || dog.kilograms === '0') {
      setInvalidform(true);
      return;
    }
    const kilogramsNumeric = parseInt(dog.kilograms, 10);
    setDog({ ...dog, kilograms: kilogramsNumeric });
    dogCreate(dog);
  };

  const handleSpan = () => {
    setInvalidform(false);
  };

  return (
    <div className={TrackerStyle.containerTotal}>
      <form className={TrackerStyle.container}>
        <label htmlFor="name" className={TrackerStyle.label}>
          Name of your Dog:
          <input className={TrackerStyle.inputs} id="name" type="text" value={dog.name} name="name" onChange={handleChange} placeholder="E.g. Jack" />
        </label>
        <label className={TrackerStyle.label} htmlFor="breed">
          Breed of your dog:
          <input className={TrackerStyle.inputs} id="breed" type="text" value={dog.breed} name="breed" onChange={handleChange} placeholder="E.g. Mix Breed" />
        </label>
        <label className={TrackerStyle.label} htmlFor="kilograms">
          How many kilograms your dog weigh?:
          <input className={TrackerStyle.inputs} id="kilograms" type="number" value={dog.kilograms} name="kilograms" onChange={handleChange} placeholder="E.g. 12" />
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
  dogSuccess: state.createdReducer,
});

const mapDispatchToProps = (dispatch) => ({
  dogCreate: (dog) => dispatch(createDog(dog)),
});

DogForm.propTypes = {
  dogCreate: PropTypes.func.isRequired,
  dogSuccess: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DogForm);
