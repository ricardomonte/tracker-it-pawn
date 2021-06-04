import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog, faWallet } from '@fortawesome/free-solid-svg-icons';
import Expense from '../components/Expense';
import { checkTokenUser } from '../actions/logginActions';
import { getExpenses } from '../actions/expensesActions';
import { getDogs } from '../actions/dogsActions';
import ExpenseChart from '../components/ExpenseChart';
import MyDogs from '../components/MyDogs';
import CommonLinks from '../common/CommonLinks';
import TrackerStyle from '../styles/Profile.module.css';

const Profile = ({
  user, userCheck, myExpenses, expenses, userDogs, dogs,
}) => {
  useEffect(() => {
    userCheck();
    myExpenses();
    userDogs();
  }, []);

  const [visibleDog, setVisibleDog] = useState(false);
  const [visibleExp, setVisibleExp] = useState(false);

  const handleVisibilityDog = () => {
    if (visibleDog === false) {
      setVisibleDog(true);
    } else {
      setVisibleDog(false);
    }
  };
  const handleVisibilityExp = () => {
    if (visibleExp === false) {
      setVisibleExp(true);
    } else {
      setVisibleExp(false);
    }
  };

  return (
    <div className={TrackerStyle.container}>
      <div className={TrackerStyle.title}>
        <h1 className={TrackerStyle.text}>Welcome</h1>
        <h3>{user.name}</h3>
      </div>
      <div className={TrackerStyle.containerDogExp}>
        <div>
          <div className={TrackerStyle.containerPaw}>
            <FontAwesomeIcon icon={faDog} onClick={handleVisibilityDog} role="presentation" size="5x" border className={TrackerStyle.paw} />
            <h3 className={TrackerStyle.textDog}>My Dogs</h3>
          </div>
        </div>
        <div>
          <div className={TrackerStyle.containerPaw}>
            <FontAwesomeIcon icon={faWallet} onClick={handleVisibilityExp} role="presentation" size="5x" border className={TrackerStyle.expense} />
            <h3 className={TrackerStyle.textDog}>Expenses</h3>
          </div>
        </div>
      </div>
      { visibleDog
        ? (
          <div className={TrackerStyle.dogCard}>
            <h3>My Friend(s)</h3>
            { dogs.length > 0 && dogs.map((element) => (
              <MyDogs key={element.name} dog={element} />
            ))}
          </div>
        )
        : <div />}
      { visibleExp
        ? (
          <div className={TrackerStyle.dogCard}>
            <h3>My Expenses</h3>
            { expenses.length > 0 && expenses.map((element) => (
              <Expense key={element.category} expense={element} />
            ))}
          </div>
        )
        : <div />}
      <div className={TrackerStyle.monthExpense}>
        <ExpenseChart expense={expenses} />
      </div>
      <CommonLinks />
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.authenticatedUser,
  expenses: state.expenses,
  dogs: state.dogs,
});

const mapDispatchToProps = (dispatch) => ({
  userCheck: () => dispatch(checkTokenUser()),
  myExpenses: () => dispatch(getExpenses()),
  userDogs: () => dispatch(getDogs()),
});

Profile.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  userCheck: PropTypes.func.isRequired,
  myExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.instanceOf(Array).isRequired,
  userDogs: PropTypes.func.isRequired,
  dogs: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
