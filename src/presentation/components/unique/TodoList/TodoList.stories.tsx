import { ComponentStoryObj, createStoryMeta } from 'src/utils/storybookUtils';
import { StyledTodoList, TodoListProps } from './TodoList';

export default createStoryMeta(StyledTodoList, {
  title: 'unique/TodoList',
});

type Story = ComponentStoryObj<TodoListProps>;
export const Docs: Story = {
  args: {
    title: 'your todo list',
    storageKey: 'story-todo-list',
  },
};
