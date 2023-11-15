import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import {Feedback} from './Feedback/Feedback';
import {Section} from './Section/Section';
import {Notification} from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0
      ? Math.round((this.state.good / totalFeedback) * 100)
      : 0;
  };

  incrementFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        {/* Розділ для залишення відгуку */}
        <Section title={'Please leave feedback'}>
          {/* Компонент FeedbackOptions для відображення кнопок відгуку та обробки їхнього кліку */}
          <Feedback
            onLeaveFeedback={this.incrementFeedback}
            options={this.state} // Передача стану компонента як властивості
          />
        </Section>

        {/* Умовний рендеринг: якщо є хоча б один відгук, відображається статистика, інакше повідомлення про відсутність відгуків */}
        {totalFeedback > 0 ? (
          <Section title={'Statistics'}>
            
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          
          <Notification message={'No feedback'} />
        )}
      </div>
    );
  }
}