import { Button } from '@/components/Button/Button';
import { renderWithStyle } from 'src/utils/testUtil';

describe('Button', () => {
  it('should return child text', () => {
    const { getByText } = renderWithStyle(<Button color="primary">SampleTest</Button>);
    expect(getByText('SampleTest')).toBeTruthy();
  });
});
