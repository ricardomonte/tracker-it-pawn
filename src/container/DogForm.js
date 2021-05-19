import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createDog } from '../actions/dogsActions';

const DogForm = ({ dogCreate }) => {
  const [dog, setDog] = useState({
    name: '',
    breed: '',
  });

  const [invalidForm, setInvalidform] = useState(false);

  const history = useHistory();

  const handleChange = (event) => {
    const updateDog = { ...dog, [event.target.name]: event.target.value };
    setDog(updateDog);
  };

  const handleValidation = (event) => {
    if (dog.name === '' || dog.breed === '') {
      setInvalidform(true);
      return;
    }
    event.preventDefault();
    history.push('/profile');
    dogCreate(dog);
  };

  const handleSpan = () => {
    setInvalidform(false);
  };

  return (
    <div>
      <form>
        <label htmlFor="name">
          Name of Dog:
          <input id="name" type="text" value={dog.name} name="name" onChange={handleChange} placeholder="E.g. Food" />
        </label>
        <label htmlFor="breed">
          Breed of the dog:
          <input id="breed" type="text" value={dog.breed} name="breed" onChange={handleChange} placeholder="E.g. Buy food for fido" />
        </label>
        <button type="submit" onClick={handleValidation}>Submit</button>
      </form>
      {
      invalidForm
        ? <div onMouseOver={handleSpan} onFocus={handleSpan}>invalid formw</div>
        : <div />
      }
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  dogCreate: (dog) => dispatch(createDog(dog)),
});

DogForm.propTypes = {
  dogCreate: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(DogForm);
