import { ComponentProps } from 'react';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { LoginSelectCard } from './LoginSelectCard';

export default createStoryMeta(LoginSelectCard, {
  title: 'parts/auth/LoginSelectCard',
});

type Story = ComponentStoryObj<ComponentProps<typeof LoginSelectCard>>;
export const Docs: Story = {
  args: {
    onSelect: () => {},
  },
};
