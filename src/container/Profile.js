import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Expense from '../components/Expense';
import { checkTokenUser } from '../actions/logginActions';
import { getExpenses } from '../actions/expensesActions';
import { getDogs } from '../actions/dogsActions';
import ExpenseChart from '../components/ExpenseChart';
import MyDogs from '../components/MyDogs';

const Profile = ({
  user, userCheck, myExpenses, expenses, userDogs, dogs,
}) => {
  useEffect(() => {
    userCheck();
    myExpenses();
    userDogs();
  }, []);
  return (
    <div>
      <div>
        <h1>Welcome</h1>
        <h3>{user.name}</h3>
      </div>
      <div>
        <h3>My Dogs</h3>
        <div>
          { dogs.length > 0 && dogs.map((element) => (
            <MyDogs key={element.name} dog={element} />
          ))}
          <Link to="/add_dog">add your dog</Link>
        </div>
      </div>
      <div>
        <h3>Expenses</h3>
        <div>
          { expenses.length > 0 && expenses.map((element) => (
            <Expense key={element.category} expense={element} />
          ))}
        </div>
        <ExpenseChart expense={expenses} />
        <div>
          <Link to="/create_expense">add expense</Link>
        </div>

      </div>
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
