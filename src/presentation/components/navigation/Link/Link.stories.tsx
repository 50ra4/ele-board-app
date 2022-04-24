import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { Link, LinkProps } from './Link';

export default createStoryMeta(Link, {
  title: 'navigation/Link',
});

type Story = ComponentStoryObj<LinkProps>;
export const Docs: Story = {
  args: {
    href: './',
    children: 'Link Story Component',
  },
};
