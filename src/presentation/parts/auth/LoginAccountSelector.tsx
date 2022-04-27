import { useMemo } from 'react';
import styled from 'styled-components';

import { MailButton } from '@/components/inputs/MailButton/MailButton';
import { GithubButton } from '@/components/unique/GithubButton/GithubButton';
import { GoogleButton } from '@/components/unique/GoogleButton/GoogleButton';

const LOGIN_ACCOUNT_TYPE = ['mail', 'google', 'github'] as const;

export type LoginAccountType = typeof LOGIN_ACCOUNT_TYPE[number];

type HandlerNames = `onClick${Capitalize<LoginAccountType>}`;
const createHandlerName = (type: LoginAccountType) =>
  `onClick${type.slice(0, 1).toUpperCase()}${type.slice(1)}` as HandlerNames;

type Props = {
  className?: string;
  type?: 'signIn' | 'signOn';
  onSelect: (type: LoginAccountType) => void;
};

export function LoginAccountSelector({ className, type = 'signIn', onSelect }: Props) {
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
      <MailButton
        text={type === 'signIn' ? 'メールアドレスでログイン' : 'メールアドレスでアカウント作成'}
        onClick={onClickMail}
      />
      <GoogleButton
        text={type === 'signIn' ? 'Googleアカウントでログイン' : 'Googleアカウントでアカウント作成'}
        onClick={onClickGoogle}
      />
      <GithubButton
        text={type === 'signIn' ? 'Githubアカウントでログイン' : 'Githubアカウントでアカウント作成'}
        onClick={onClickGithub}
      />
    </Root>
  );
}

const Root = styled.div`
  & > button {
    width: 100%;
    margin-top: 8px;
  }
`;
