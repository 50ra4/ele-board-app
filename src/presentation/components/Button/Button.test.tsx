import { render } from '@testing-library/react';

describe('Button', () => {
  it('should return child text', () => {
    const { getByText } = render(<button>SampleTest</button>);
    expect(getByText('SampleTest')).toBeTruthy();
  });
});
