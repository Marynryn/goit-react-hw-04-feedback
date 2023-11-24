import React from "react";
import css from "../Feedback/Feedback.module.css";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "components/FeedbackOptions/FeedbackOptions";
import Section from "components/Section/Section";
import Notification from "components/Notification/Notification";


export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  count = (key) => {
    this.setState(prevState => { return { [key]: prevState[key] + 1 }; })
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage = () => {
    return Math.round(this.countTotalFeedback() === 0 ? 0 : (this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <div className={css.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.count} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (<Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />) : (<Notification message="There is no feedback" />)
          }
        </Section>
      </div>
    )
  }
}
