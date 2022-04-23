import { ComponentStoryObj, createStoryMeta, FRUIT_NAME } from 'src/utils/storybookUtils';
import { Tabs, TabsProps } from './Tabs';

export default createStoryMeta(Tabs, {
  title: 'navigation/Tabs',
});

const FRUIT_NAMES = Object.entries(FRUIT_NAME)
  .map(([id, name]) => ({ id, label: name }))
  .slice(0, 3);

type Story = ComponentStoryObj<TabsProps<string>>;
export const Docs: Story = {
  args: {
    color: 'secondary',
    selectedId: FRUIT_NAMES[1].id,
    items: FRUIT_NAMES,
    onChange: () => {},
  },
};
