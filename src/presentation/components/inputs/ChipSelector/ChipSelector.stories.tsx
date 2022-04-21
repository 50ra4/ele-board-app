import { useState } from 'react';
import { ComponentStoryObj, createStoryMeta, FRUIT_NAME } from 'src/utils/storybookUtils';
import { ChipSelector, ChipSelectorGroup, ChipSelectorProps } from './ChipSelector';

export default createStoryMeta(ChipSelector, {
  title: 'inputs/ChipSelector',
});

type Fruit = { id: string; name: string };

type Story = ComponentStoryObj<ChipSelectorProps<Fruit>>;
export const Docs: Story = {
  args: {
    type: 'checkbox',
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

export const Radio = () => {
  const [fruitName, setFruitName] = useState<string | undefined>(FRUIT_NAME.apple);
  const onChange = (checked: boolean, fruit: Fruit) => {
    if (checked) {
      setFruitName(fruit.name);
    } else {
      setFruitName(undefined);
    }
  };

  return (
    <ChipSelectorGroup>
      {FRUIT_NAMES.map((v) => (
        <ChipSelector
          key={v.id}
          type="radio"
          id={`radio-${v.id}`}
          name={`radio-${v.id}`}
          label={v.name}
          value={v}
          disabled={v.name === FRUIT_NAME.strawberry}
          checked={v.name === fruitName}
          color="primary"
          onChange={onChange}
        />
      ))}
    </ChipSelectorGroup>
  );
};

export const Checkbox = () => {
  const [fruitNames, setFruitNames] = useState<string[]>([FRUIT_NAME.apple]);
  const onChange = (checked: boolean, fruit: Fruit) => {
    if (checked) {
      setFruitNames((prev) => [...prev, fruit.name]);
    } else {
      setFruitNames((prev) => prev.filter((v) => v !== fruit.name));
    }
  };

  return (
    <ChipSelectorGroup>
      {FRUIT_NAMES.map((v) => (
        <ChipSelector
          key={v.id}
          type="checkbox"
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
    </ChipSelectorGroup>
  );
};
