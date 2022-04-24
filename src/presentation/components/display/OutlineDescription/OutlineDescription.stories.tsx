import { ComponentProps } from 'react';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { OutlineDescription } from './OutlineDescription';

export default createStoryMeta(OutlineDescription, {
  title: 'display/OutlineDescription',
});

type Story = ComponentStoryObj<ComponentProps<typeof OutlineDescription>>;
export const Docs: Story = {
  args: {
    children: (
      <>
        初めての方は<a href="#">新規アカウント登録</a>
      </>
    ),
  },
};
