import React from 'react';
import PropTypes from 'prop-types'; 
import { Block } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className="statistic-block">
    <Block className="statistic-values">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage} %</p>
    </Block>
  </div>
);


Statistics.propTypes = {
  good: PropTypes.number.isRequired, 
  neutral: PropTypes.number.isRequired, 
  bad: PropTypes.number.isRequired, 
  total: PropTypes.number.isRequired, 
  positivePercentage: PropTypes.number.isRequired, 
};
