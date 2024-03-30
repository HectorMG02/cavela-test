import useAnimateNumber from '../../hooks/useAnimateNumber';

const AnimatedNumber = ({ value }: { value: number}) => {
  const animatedValue = useAnimateNumber(value);

  return <span>{Math.round(animatedValue).toFixed(2)}</span>;
};

export default AnimatedNumber;
