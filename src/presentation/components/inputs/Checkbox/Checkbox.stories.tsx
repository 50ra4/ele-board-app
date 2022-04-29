import { useState } from 'react';
import { ComponentStoryObj, createStoryMeta, FRUIT_NAME } from 'src/utils/storybookUtils';
import { Checkbox, CheckboxProps, CheckboxGroup } from './Checkbox';

export default createStoryMeta(Checkbox, {
  title: 'inputs/Checkbox',
});

type Fruit = { id: string; name: string };

type Story = ComponentStoryObj<CheckboxProps<Fruit>>;
export const Docs: Story = {
  args: {
    id: 'docs',
    name: 'docs',
    label: 'docs',
    value: { id: 'strawberry', name: '苺' },
    checked: true,
    disabled: false,
    color: 'primary',
    onChange: () => {},
  },
};

const FRUIT_NAMES = Object.entries(FRUIT_NAME).map(([id, name]) => ({ id, name })) as Fruit[];

export const Group = () => {
  const [fruitNames, setFruitNames] = useState<string[]>([FRUIT_NAME.apple]);
  const onChange = (checked: boolean, fruit: Fruit) => {
    if (checked) {
      setFruitNames((prev) => [...prev, fruit.name]);
    } else {
      setFruitNames((prev) => prev.filter((v) => v !== fruit.name));
    }
  };

  return (
    <CheckboxGroup direction="column">
      {FRUIT_NAMES.map((v) => (
        <Checkbox
          key={v.id}
          id={`checkbox-${v.id}`}
          name={`checkbox-${v.id}`}
          label={v.name}
          value={v}
          disabled={v.name === FRUIT_NAME.strawberry}
          checked={fruitNames.includes(v.name)}
          color="secondary"
          onChange={onChange}
        />
      ))}
    </CheckboxGroup>
  );
};
