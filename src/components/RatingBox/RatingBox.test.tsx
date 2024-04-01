import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import RatingBox from './RatingBox';

describe('RatingBox', () => {
    it('renders with the correct rating and styles', () => {
      const props = {
        rating: '4.5',
        backgroundColor: 'black',
        borderColor: 'yellow',
        textColor: 'white',
        className: 'extra-class',
      };
  
      render(<RatingBox {...props} />);
      const ratingBox = screen.getByText('4.5');
  
      expect(ratingBox).toBeInTheDocument();
      expect(ratingBox).toHaveStyle({
        backgroundColor: 'black',
        borderColor: 'yellow',
        color: 'white',
      });
      
      expect(ratingBox).toHaveClass('extra-class');
    });


    it('conditionally applies className', () => {
        render(<RatingBox rating="4.5" backgroundColor="blue" borderColor="green" textColor="red"
            className='test-class'
        />);
        const ratingBox = screen.getByText('4.5');
        expect(ratingBox.className).toContain('test-class');
      });
      
  });
  