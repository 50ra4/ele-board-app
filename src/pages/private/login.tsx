import styled from 'styled-components';
import { useRouter } from 'next/router';

import { OutlineDescription } from '@/components/display/OutlineDescription/OutlineDescription';
import { LoginMethod, LoginSelectCard } from 'src/presentation/parts/auth/LoginSelectCard';
import { MailLoginForm } from 'src/presentation/parts/auth/MailLoginForm';
import { TemplateNo1 } from 'src/presentation/templates/TemplateNo1';
import { Link } from '@/components/navigation/Link/Link';

function LoginPage() {
  const router = useRouter();

  const showMailLoginForm = router.query?.type === 'mail';

  const onSubmit = (value: { email: string; password: string }) => {
    // TODO:
  };

  const onSelect = (method: LoginMethod) => {
    if (method === 'mail') {
      router.push({ href: router.pathname, query: { type: 'mail' } });
      return;
    }
    // TODO:
    console.error(`${method} is not implemented.`);
  };

  return (
    <TemplateNo1>
      {showMailLoginForm ? (
        <>
          <StyledMailLoginForm onSubmit={onSubmit} />
          <StyledOutlineDescription>
            パスワードをお忘れの方は
            <Link href="/private/resetPassword" text="パスワードリセット" />
          </StyledOutlineDescription>
          <StyledOutlineDescription>
            他の方法で
            <Link href="/private/login" text="ログイン" />
          </StyledOutlineDescription>
        </>
      ) : (
        <StyledLoginSelectCard onSelect={onSelect} />
      )}
      <StyledOutlineDescription>
        初めての方は
        <Link href="/private/signUp" text="アカウント登録" />
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
