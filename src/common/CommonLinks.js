import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDog, faWallet, faPlus, faClock, faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import TrackerStyle from '../styles/CommonLinks.module.css';

const CommonLinks = () => {
  const history = useHistory();
  const handleLogOut = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  return (
    <div className={TrackerStyle.containerLinks}>
      <div>
        <Link className={TrackerStyle.linkDog} to="/add_dog">
          <FontAwesomeIcon icon={faDog} size="3x" />
          <FontAwesomeIcon icon={faPlus} size="2x" className={TrackerStyle.plus} />
        </Link>
      </div>
      <div>
        <Link className={TrackerStyle.linkExp} to="/create_expense">
          <FontAwesomeIcon icon={faWallet} size="3x" />
          <FontAwesomeIcon icon={faPlus} size="2x" className={TrackerStyle.plus} />
        </Link>
      </div>
      <div>
        <Link className={TrackerStyle.linkExp} to="/create_hour">
          <FontAwesomeIcon icon={faClock} size="3x" />
          <FontAwesomeIcon icon={faPlus} size="2x" className={TrackerStyle.plus} />
        </Link>
      </div>
      <div className={TrackerStyle.logOut}>
        <FontAwesomeIcon icon={faSignOutAlt} onClick={handleLogOut} role="presentation" size="3x" />
      </div>
    </div>
  );
};

export default CommonLinks;
