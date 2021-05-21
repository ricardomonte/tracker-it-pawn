import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const HoursToday = ({ myHours, weeklyPlayTime }) => {
  const d = new Date().getMonth() + 1;
  const filteredDate = myHours.filter((element) => {
    const month = element.play.split('-')[1];
    return (d === +month);
  });

  const total = filteredDate.reduce((total, element) => (total + element.hour), 0);

  const percentage = (100 * total) / (weeklyPlayTime * 4);
  const percentRound = Math.round(percentage);

  return (
    <div>
      <h3>Hours played this Month (approx)</h3>
      <CircularProgressbar
        value={percentRound}
        text={`${percentRound} %`}
        maxValue={weeklyPlayTime * 4}
      />
    </div>
  );
};

HoursToday.propTypes = {
  weeklyPlayTime: PropTypes.number.isRequired,
  myHours: PropTypes.instanceOf(Array).isRequired,
};

export default HoursToday;
