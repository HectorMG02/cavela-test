import { describe, it, vi, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react-hooks';

import { animateNumbers } from '../utils/animateNumber';
import useAnimateNumber from './useAnimateNumber';


vi.mock('../utils/animateNumber', () => ({
  animateNumbers: vi.fn(),
}));

describe('useAnimateNumber', () => {
  it('should start at 0 and animate towards the target number', async () => {
    const targetNumber = 100;
    const { result } = renderHook(() => useAnimateNumber(targetNumber));

    expect(result.current).toBe(0);

    act(() => {
      const callback = animateNumbers.mock.calls[0][3];
      callback(targetNumber);
    });

    expect(result.current).toBe(targetNumber);
  });
});
