import { ComponentProps } from 'react';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { Chip, ChipList } from './Chip';

export default createStoryMeta(Chip, {
  title: 'display/chip',
});

type Story = ComponentStoryObj<ComponentProps<typeof Chip>>;
export const Docs: Story = {
  args: {
    color: 'primary',
    variant: 'contained',
    children: 'Docs',
  },
};

export const Outlined: Story = {
  args: {
    color: 'secondary',
    variant: 'outlined',
    children: 'Outlined',
  },
};

export const Disabled: Story = {
  args: {
    color: 'primary',
    disabled: true,
    children: 'Disabled',
  },
};

const LIST = Array.from({ length: 8 }).map((_, i) => `Chip No.${i + 1}`);

export const ChipListGroup = () => {
  return (
    <ChipList>
      {LIST.map((v, i) => (
        <Chip
          color={i % 2 === 1 ? 'primary' : 'secondary'}
          variant={i % 3 === 1 ? 'outlined' : 'contained'}
        >
          {v}
        </Chip>
      ))}
    </ChipList>
  );
};
