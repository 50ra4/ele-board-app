import { ComponentStoryObj, createStoryMeta, LOREM_IPSUM_TEXT } from 'src/utils/storybookUtils';
import { Accordion, AccordionProps } from './Accordion';

export default createStoryMeta(Accordion, {
  title: 'surfaces/Accordion',
});

type Story = ComponentStoryObj<AccordionProps>;
export const Docs: Story = {
  args: {
    id: 'docs',
    title: 'Accordion Component',
    children: <p>{LOREM_IPSUM_TEXT}</p>,
  },
};
