import { useEffect, useState } from 'react';
import { animateNumbers } from '../utils/animateNumber';


const useAnimateNumber = (targetNumber: number) => {
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    const duration = 1;

    const intervalId = animateNumbers(
      animatedNumber,
      targetNumber,
      duration,
      setAnimatedNumber
    );

    return () => clearInterval(intervalId);
  }, [animatedNumber, targetNumber]);

  return animatedNumber;
};

export default useAnimateNumber;
