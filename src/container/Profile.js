import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { checkTokenUser } from '../actions/logginActions';

const Profile = ({ user, userCheck }) => {
  useEffect(() => {
    userCheck();
  }, []);
  return (
    <div>
      Welcome
      {user.name}
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.authenticatedUser,
});

const mapDispatchToProps = (dispatch) => ({
  userCheck: () => dispatch(checkTokenUser()),
});

Profile.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  userCheck: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
