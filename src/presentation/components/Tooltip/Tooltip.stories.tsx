import { useToggle } from 'src/hooks/useToggle';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import styled from 'styled-components';
import { TextButton } from '../TextButton/TextButton';
import { Tooltip, TooltipProps } from './Tooltip';

const Wrapper = styled.div`
  margin-top: 40px;
`;

export default createStoryMeta(Tooltip, {
  title: 'Tooltip',
  decorators: [(fn) => <Wrapper>{fn()}</Wrapper>],
});

type Story = ComponentStoryObj<TooltipProps>;
export const Docs: Story = {
  args: {
    text: 'tooltip sample',
    color: 'primary',
    visibleOnHover: true,
    children: <TextButton color="primary" text="hover me" />,
  },
};

export const WithState = () => {
  const [show, toggle] = useToggle();
  return (
    <Tooltip color="primary" show={show} text="tooltip">
      <TextButton color="primary" text="click me" onClick={toggle} />
    </Tooltip>
  );
};
