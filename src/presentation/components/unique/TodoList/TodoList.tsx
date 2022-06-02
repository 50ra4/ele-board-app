import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

export type TodoListProps = {
  className?: string;
  storageKey: string;
  title: string;
};

type Todo = {
  id: string;
  completed: boolean;
  text: string;
  createdAt: number;
};

const useTodoList = (storageKey: string) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const todoListRef = useRef(todoList);
  useEffect(() => {
    todoListRef.current = todoList;
  }, [todoList]);

  useEffect(() => {
    // mount時にローカルストレージからデータを取得し、stateに設定
    const storageItems = JSON.parse(window.localStorage.getItem(storageKey) ?? '[]') as Todo[];
    setTodoList(storageItems);
    return () => {
      // unmount時にローカルストレージに保存
      window.localStorage.setItem(storageKey, JSON.stringify(todoListRef.current));
    };
  }, []);

  const createTodo = useCallback((text: string) => {
    setTodoList((prev) => [
      ...prev,
      { id: nanoid(), text, completed: false, createdAt: new Date().getTime() },
    ]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodoList((prev) =>
      prev.map((todo) => ({
        ...todo,
        completed: id !== todo.id ? todo.completed : !todo.completed,
      })),
    );
  }, []);

  const reset = useCallback(() => {
    setTodoList([]);
  }, []);

  return { todoList, createTodo, toggleTodo, reset };
};

export const TodoList = ({ className, title, storageKey }: TodoListProps) => {
  const [text, setText] = useState('');
  const [hideCompleted, setHideCompleted] = useState(false);
  const { todoList, createTodo, toggleTodo, reset } = useTodoList(storageKey);

  const items = useMemo(
    () => (!hideCompleted ? todoList : todoList.filter(({ completed }) => !completed)),
    [hideCompleted, todoList],
  );

  const onClickTodo = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const id = e.currentTarget.dataset.id ?? '';
      toggleTodo(id);
    },
    [toggleTodo],
  );

  return (
    <section className={className}>
      <h3>{title}</h3>
      <ul>
        {items.map(({ id, completed, text }) => (
          <li key={id} className={completed ? 'completed' : ''} data-id={id} onClick={onClickTodo}>
            ・{text}
          </li>
        ))}
      </ul>
      <hr />
      <div>
        <input
          value={text}
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
        />
        <button
          disabled={!text.length}
          onClick={() => {
            createTodo(text);
            setText('');
          }}
        >
          Add Task
        </button>
      </div>
      <hr />
      <label htmlFor="hide-completed-checkbox">
        <input
          type="checkbox"
          id="hide-completed-checkbox"
          checked={hideCompleted}
          onChange={(e) => {
            setHideCompleted(e.target.checked);
          }}
        />
        {hideCompleted ? 'Show completed' : 'Hide completed'}
      </label>
      <hr />
      <button onClick={reset}>Clear All</button>
    </section>
  );
};

export const StyledTodoList = styled(TodoList)`
  /* title */
  & > h3 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  /* todoList */
  & > ul {
    margin: 8px 0;
    padding: 0 8px;

    & > li {
      &.completed {
        text-decoration-line: line-through;
        color: #777777;
      }
    }
    & > li + li {
      margin-top: 8px;
    }
  }

  & > label {
  }

  & > hr {
    margin: 8px 4px;
    border-bottom: 1px solid #000000;
  }

  /* button */
  & button {
    height: 24px;
    font-size: 12px;
    font-weight: bold;
    padding: 0 8px;
    color: #ffffff;
    background-color: #000000;

    &:disabled {
      background-color: #686868;
    }
  }
`;
