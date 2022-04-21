import { useToggle } from 'src/hooks/useToggle';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import styled from 'styled-components';
import { Tooltip, TooltipProps } from './Tooltip';

const Wrapper = styled.div`
  margin-top: 40px;
`;

const Button = styled.button`
  padding: 8px 16px;
  & + & {
    margin-left: 8px;
  }
`;
export default createStoryMeta(Tooltip, {
  title: 'display/Tooltip',
  decorators: [(fn) => <Wrapper>{fn()}</Wrapper>],
});

type Story = ComponentStoryObj<TooltipProps>;
export const Docs: Story = {
  args: {
    text: 'tooltip sample',
    color: 'primary',
    visibleOnHover: true,
    children: <Button>hover me</Button>,
  },
};

export const WithState = () => {
  const [show, toggle] = useToggle();
  return (
    <Tooltip color="primary" show={show} text="tooltip">
      <Button onClick={toggle}>hover me</Button>,
    </Tooltip>
  );
};
