import styled from 'styled-components';

import { Card } from '@/components/surfaces/Card/Card';
import { MailButton } from '@/components/inputs/MailButton/MailButton';
import { GithubButton } from '@/components/unique/GithubButton/GithubButton';
import { GoogleButton } from '@/components/unique/GoogleButton/GoogleButton';
import { useMemo } from 'react';

const LOGIN_METHOD = ['mail', 'google', 'github'] as const;

export type LoginMethod = typeof LOGIN_METHOD[number];

type HandlerNames = `onClick${Capitalize<LoginMethod>}`;

const createHandlerName = (method: LoginMethod) =>
  `onClick${method.slice(0, 1).toUpperCase()}${method.slice(1)}` as HandlerNames;

type Props = {
  className?: string;
  onSelect: (method: LoginMethod) => void;
};

export function LoginSelectCard({ className, onSelect }: Props) {
  const { onClickMail, onClickGoogle, onClickGithub } = useMemo(
    () =>
      LOGIN_METHOD.reduce(
        (acc, method) => ({ ...acc, [createHandlerName(method)]: () => onSelect(method) }),
        {} as Record<HandlerNames, () => void>,
      ),
    [onSelect],
  );

  return (
    <Card className={className} title="ログイン">
      <ButtonWrap>
        <MailButton text="メールアドレスでログインする" onClick={onClickMail} />
        <GoogleButton text="Googleアカウントでログインする" onClick={onClickGoogle} />
        <GithubButton text="Githubアカウントでログインする" onClick={onClickGithub} />
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
