import { LoadingSpinner } from './LoadingSpinner';
import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { IconProps } from '@/components/icons/SvgIcon';

export default createStoryMeta(LoadingSpinner, {
  title: 'utils/LoadingSpinner',
});

type Story = ComponentStoryObj<IconProps>;
export const Docs: Story = {
  args: {
    color: 'primary',
    size: 'large',
  },
};
