import { Button } from './Feedback.styled';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(key => (
    <Button key={key} onClick={() => onLeaveFeedback(key)}>
      {key}
    </Button>
  ));
};