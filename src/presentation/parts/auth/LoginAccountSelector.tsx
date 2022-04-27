import { useMemo } from 'react';
import styled from 'styled-components';

import { MailButton } from '@/components/inputs/MailButton/MailButton';
import { GithubButton } from '@/components/unique/GithubButton/GithubButton';
import { GoogleButton } from '@/components/unique/GoogleButton/GoogleButton';

const LOGIN_ACCOUNT_TYPE = ['mail', 'google', 'github'] as const;

export type LoginAccountType = typeof LOGIN_ACCOUNT_TYPE[number];
export type LoginAccountItem = {
  type: LoginAccountType;
  label: string;
};

type HandlerNames = `onClick${Capitalize<LoginAccountType>}`;
const createHandlerName = (type: LoginAccountType) =>
  `onClick${type.slice(0, 1).toUpperCase()}${type.slice(1)}` as HandlerNames;

type Props = {
  className?: string;
  items: LoginAccountItem[];
  onSelect: (type: LoginAccountType) => void;
};

export function LoginAccountSelector({ className, items, onSelect }: Props) {
  const { onClickMail, onClickGoogle, onClickGithub } = useMemo(
    () =>
      LOGIN_ACCOUNT_TYPE.reduce(
        (acc, method) => ({ ...acc, [createHandlerName(method)]: () => onSelect(method) }),
        {} as Record<HandlerNames, () => void>,
      ),
    [onSelect],
  );

  return (
    <Root className={className}>
      {items.map(({ type, label }) => {
        switch (type) {
          case 'mail':
            return <MailButton key={type} text={label} onClick={onClickMail} />;
          case 'google':
            return <GoogleButton key={type} text={label} onClick={onClickGoogle} />;
          case 'github':
            return <GithubButton key={type} text={label} onClick={onClickGithub} />;
          default:
            return null;
        }
      })}
    </Root>
  );
}

const Root = styled.div`
  & > button {
    width: 100%;
    margin-top: 8px;
  }
`;
