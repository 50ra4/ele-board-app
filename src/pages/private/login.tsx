import { useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { OutlineDescription } from '@/components/display/OutlineDescription/OutlineDescription';
import {
  LoginAccountItem,
  LoginSelectCard,
  LoginAccountType,
} from 'src/presentation/parts/auth/LoginSelectCard';
import { MailLoginForm } from 'src/presentation/parts/auth/MailLoginForm';
import { TemplateNo1 } from 'src/presentation/templates/TemplateNo1';
import { Link } from '@/components/navigation/Link/Link';

const LOGIN_ACCOUNT_ITEMS: LoginAccountItem[] = [
  {
    type: 'mail',
    label: 'メールアドレスでログイン',
  },
  {
    type: 'google',
    label: 'Googleアカウントでログイン',
  },
  {
    type: 'github',
    label: 'Githubアカウントでログイン',
  },
];

function LoginPage() {
  const router = useRouter();

  const showMailLoginForm = router.query?.type === 'mail';

  const onSubmit = (value: { email: string; password: string }) => {
    // TODO:
  };

  const onSelect = useCallback(
    (type: LoginAccountType) => {
      if (type === 'mail') {
        router.push({ href: router.pathname, query: { type: 'mail' } });
        return;
      }
      // TODO:
      console.error(`${type} is not implemented.`);
    },
    [router],
  );

  return (
    <TemplateNo1>
      {showMailLoginForm ? (
        <>
          <StyledMailLoginForm onSubmit={onSubmit} />
          <StyledOutlineDescription>
            パスワードをお忘れの方は
            <Link href="/private/resetPassword">リセット</Link>
          </StyledOutlineDescription>
          <StyledOutlineDescription>
            他の方法で
            <Link href="/private/login">ログイン</Link>
          </StyledOutlineDescription>
        </>
      ) : (
        <StyledLoginSelectCard title="ログイン" items={LOGIN_ACCOUNT_ITEMS} onSelect={onSelect} />
      )}
      <StyledOutlineDescription>
        初めての方は
        <Link href="/private/signUp">アカウント登録</Link>
      </StyledOutlineDescription>
    </TemplateNo1>
  );
}

const StyledLoginSelectCard = styled(LoginSelectCard)`
  margin-top: 100px;
  width: 100%;
  max-width: 480px;
`;

const StyledMailLoginForm = styled(MailLoginForm)`
  margin-top: 100px;
  width: 100%;
  max-width: 480px;
`;

const StyledOutlineDescription = styled(OutlineDescription)`
  margin-top: 16px;
  max-width: 480px;
`;

export default LoginPage;