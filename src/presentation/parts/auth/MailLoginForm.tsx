import { useState } from 'react';
import styled from 'styled-components';
import { PasswordForm } from '@/components/forms/PasswordForm/PasswordForm';
import { TextForm } from '@/components/forms/TextForm/TextForm';
import { TextButton } from '@/components/inputs/TextButton/TextButton';
import { Divider } from '@/components/utils/Divider/Divider';

type FormState = {
  email: string;
  password: string;
};

type Props = {
  className?: string;
  type: 'signIn' | 'signUp';
  isProcessing?: boolean;
  onSubmit: (state: FormState) => void;
};

export function MailLoginForm({ className, type, isProcessing, onSubmit }: Props) {
  const [{ email, password }, setState] = useState<FormState>({ email: '', password: '' });

  const hasError = false;

  return (
    <Form
      className={className}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ email, password });
      }}
    >
      <TextForm
        type="email"
        id="email"
        name="email"
        label="Email"
        description={
          type === 'signIn'
            ? '登録したメールアドレスを入力してください'
            : '登録するメールアドレスを入力してください'
        }
        value={email}
        required={true}
        onChange={(v) => {
          setState((prev) => ({ ...prev, email: v }));
        }}
        onBlur={(v) => {
          setState((prev) => ({ ...prev, email: v }));
        }}
        onClear={() => {
          setState((prev) => ({ ...prev, email: '' }));
        }}
      />
      <PasswordForm
        id="password"
        name="password"
        label="パスワード"
        value={password}
        required={true}
        description={
          type === 'signIn'
            ? '登録したパスワードを入力してください'
            : '登録するパスワードを入力してください'
        }
        onChange={(v) => {
          setState((prev) => ({ ...prev, password: v }));
        }}
        onBlur={(v) => {
          setState((prev) => ({ ...prev, password: v }));
        }}
      />
      <Divider />
      <ButtonWrap>
        <TextButton
          type="button"
          color="default"
          text="クリア"
          disabled={isProcessing}
          onClick={() => {
            setState({ email: '', password: '' });
          }}
        />
        <TextButton
          type="submit"
          isLoading={isProcessing}
          color="secondary"
          text={type === 'signIn' ? 'ログイン' : 'アカウント登録'}
          disabled={hasError}
        />
      </ButtonWrap>
    </Form>
  );
}

const Form = styled.form`
  & > * {
    margin-top: 8px;
  }
  & > ${Divider} {
    margin-top: 16px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
