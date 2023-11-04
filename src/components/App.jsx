import React, { useState } from 'react';
import { Section } from './section/Section';
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import PropTypes from 'prop-types';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage =
    total > 0 ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={handleLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          'There is no feedback'
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;



App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  onLeaveFeedback: PropTypes.func,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
