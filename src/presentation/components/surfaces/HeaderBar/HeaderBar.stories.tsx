import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { HeaderBar, HeaderBarProps } from './HeaderBar';

export default createStoryMeta(HeaderBar, {
  title: 'surfaces/HeaderBar',
});

type Story = ComponentStoryObj<HeaderBarProps>;
export const Docs: Story = {
  args: {
    title: 'HeaderBar Component',
    openMenu: false,
    onClickMenu: () => {},
  },
};
