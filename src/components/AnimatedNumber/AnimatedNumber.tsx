import useAnimateNumber from '../../hooks/useAnimateNumber';

const AnimatedNumber = ({ value }: { value: number}) => {
  const animatedValue = useAnimateNumber(value);

  return <span data-testid="animated-number">{Math.round(animatedValue).toFixed(2)}</span>;
};

export default AnimatedNumber;
