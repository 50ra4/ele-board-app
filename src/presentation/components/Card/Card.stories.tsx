import { ComponentStoryObj, createStoryMeta, LOREM_IPSUM_TEXT } from 'src/utils/storybookUtils';
import { Card, CardProps } from './Card';

export default createStoryMeta(Card, {
  title: 'Card',
});

type Story = ComponentStoryObj<CardProps>;
export const Docs: Story = {
  args: {
    title: 'Card Component',
    children: <p>{LOREM_IPSUM_TEXT}</p>,
  },
};
