import { useState } from 'react';
import { PasswordForm } from '@/components/forms/PasswordForm/PasswordForm';
import { TextForm } from '@/components/forms/TextForm/TextForm';
import { TextButton } from '@/components/inputs/TextButton/TextButton';
import { Card } from '@/components/surfaces/Card/Card';
import styled from 'styled-components';

type FormState = {
  email: string;
  password: string;
};

type Props = {
  className?: string;
  isProcessing?: boolean;
  onSubmit: (state: FormState) => void;
};

export function MailLoginForm({ className, isProcessing, onSubmit }: Props) {
  const [{ email, password }, setState] = useState<FormState>({ email: '', password: '' });

  const hasError = false;

  return (
    <Card className={className} title="ログイン">
      <Form
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
          description="登録したメールアドレスを入力してください"
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
          description="登録したパスワードを入力してください"
          onChange={(v) => {
            setState((prev) => ({ ...prev, password: v }));
          }}
          onBlur={(v) => {
            setState((prev) => ({ ...prev, password: v }));
          }}
        />
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
            text="ログイン"
            disabled={hasError}
          />
        </ButtonWrap>
      </Form>
    </Card>
  );
}

const Form = styled.form`
  & > * {
    margin-top: 8px;
  }
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
