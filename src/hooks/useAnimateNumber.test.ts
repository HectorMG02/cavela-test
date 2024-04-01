 


import { describe, it, vi, expect } from 'vitest';
import { renderHook } from '@testing-library/react-hooks';
import useAnimateNumber from './useAnimateNumber';


vi.mock('../utils/animateNumber', () => ({
  animateNumbers: vi.fn((initialValue, finalValue, duration, onUpdate) => {
    onUpdate(finalValue);
    return { clear: () => {} };
  }),
}));


describe('useAnimateNumber', () => {
  it('should start at 0 and animate towards the target number', async () => {
    const targetNumber = 100;
    const { result } = renderHook(() => useAnimateNumber(targetNumber));

    expect(result.current).toBe(targetNumber);
  });
});