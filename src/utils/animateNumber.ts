export const animateNumbers = (
    initialValue: number,
    finalValue: number,
    duration: number,
    onUpdate: (value: number) => void,
    onComplete?: () => void
) => {
    const speed = 2.25;
    const increment = ((finalValue - initialValue) / (60 * duration)) * speed;
    let currentValue = initialValue;

    const intervalId = setInterval(() => {
        currentValue += increment;

        if (currentValue >= finalValue) {
            clearInterval(intervalId);
            currentValue = finalValue;
            if (onComplete) {
                onComplete();
            }
        }

        onUpdate(currentValue);
    }, 1000 / (60 * duration));

    return intervalId;
};
