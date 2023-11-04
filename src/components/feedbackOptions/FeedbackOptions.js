import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from './FeedbackOptions.styled.js';

export const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className="statistic-block-btn">
    <Btn type="button" onClick={() => onLeaveFeedback('good')}>
      Good
    </Btn>
    <Btn type="button" onClick={() => onLeaveFeedback('neutral')}>
      Neutral
    </Btn>
    <Btn type="button" onClick={() => onLeaveFeedback('bad')}>
      Bad
    </Btn>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
