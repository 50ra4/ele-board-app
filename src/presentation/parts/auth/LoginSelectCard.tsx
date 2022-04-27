import styled from 'styled-components';

import { Card } from '@/components/surfaces/Card/Card';
import { MailButton } from '@/components/inputs/MailButton/MailButton';
import { GithubButton } from '@/components/unique/GithubButton/GithubButton';
import { GoogleButton } from '@/components/unique/GoogleButton/GoogleButton';
import { useMemo } from 'react';

const LOGIN_ACCOUNT_TYPE = ['mail', 'google', 'github'] as const;

export type LoginAccountType = typeof LOGIN_ACCOUNT_TYPE[number];

type HandlerNames = `onClick${Capitalize<LoginAccountType>}`;

const createHandlerName = (type: LoginAccountType) =>
  `onClick${type.slice(0, 1).toUpperCase()}${type.slice(1)}` as HandlerNames;

export type LoginAccountItem = {
  type: LoginAccountType;
  label: string;
};

type Props = {
  className?: string;
  title: string;
  items: LoginAccountItem[];
  onSelect: (type: LoginAccountType) => void;
};

export function LoginSelectCard({ className, title, items, onSelect }: Props) {
  const { onClickMail, onClickGoogle, onClickGithub } = useMemo(
    () =>
      LOGIN_ACCOUNT_TYPE.reduce(
        (acc, method) => ({ ...acc, [createHandlerName(method)]: () => onSelect(method) }),
        {} as Record<HandlerNames, () => void>,
      ),
    [onSelect],
  );
  return (
    <Card className={className} title={title}>
      <ButtonWrap>
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
      </ButtonWrap>
    </Card>
  );
}

const ButtonWrap = styled.div`
  padding: 0 16px;
  & > button {
    width: 100%;
    margin-top: 8px;
  }
`;
