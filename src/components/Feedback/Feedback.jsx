import React from "react";
import css from "../Feedback/Feedback.module.css";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";
import { useState } from "react";

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ["good", "neutral", "bad"];

  function count(key) {
    switch (key) {
      case "good":
        setGood(state => state + 1);
        break;

      case "neutral":
        setNeutral(state => state + 1);
        break;
      case "bad":
        setBad(state => state + 1);
        break;

    }

  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
    return Math.round(countTotalFeedback() === 0 ? 0 : (good / countTotalFeedback()) * 100);
  }


  return (
    <div className={css.feedback}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={count} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (<Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />) : (<Notification message="There is no feedback" />)
        }
      </Section>
    </div>
  )
}

