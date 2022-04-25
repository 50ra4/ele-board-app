import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import styled from 'styled-components';
import { Tooltip, TooltipProps, TooltipText } from './Tooltip';

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
    text: 'Tooltip sample',
    color: 'primary',
    children: <Button>Tooltip</Button>,
  },
};

const StyledHover = styled(Tooltip)`
  &:hover > ${TooltipText} {
    visibility: visible;
    opacity: 1;
  }
`;

export const Hover = () => {
  return (
    <StyledHover color="primary" text="tooltip">
      <Button>hover me</Button>
    </StyledHover>
  );
};
