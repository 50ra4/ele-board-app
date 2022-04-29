import { useCallback } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { Link } from '@/components/navigation/Link/Link';
import { Card } from '@/components/surfaces/Card/Card';
import { OutlineDescription } from '@/components/display/OutlineDescription/OutlineDescription';

import {
  LoginAccountType,
  LoginAccountSelector,
} from 'src/presentation/parts/auth/LoginAccountSelector';
import { MailLoginForm } from 'src/presentation/parts/auth/MailLoginForm';
import { TemplateNo1 } from 'src/presentation/templates/TemplateNo1';

function SignUpPage() {
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
      <StyledCard title="アカウント作成">
        {showMailLoginForm ? (
          <StyledMailLoginForm type="signOn" onSubmit={onSubmit} />
        ) : (
          <StyledLoginAccountSelector type="signOn" onSelect={onSelect} />
        )}
      </StyledCard>
      {showMailLoginForm && (
        <StyledOutlineDescription>
          他の方法で
          <Link href="/private/signUp">アカウント作成</Link>
        </StyledOutlineDescription>
      )}
      <StyledOutlineDescription>
        既にご利用中の方は
        <Link href="/private/login">ログイン</Link>
      </StyledOutlineDescription>
    </TemplateNo1>
  );
}

const StyledCard = styled(Card)`
  margin-top: 100px;
  width: 100%;
  max-width: 480px;
`;

const StyledLoginAccountSelector = styled(LoginAccountSelector)`
  padding: 0 4px;
`;

const StyledMailLoginForm = styled(MailLoginForm)`
  padding: 0 4px;
`;

const StyledOutlineDescription = styled(OutlineDescription)`
  margin-top: 16px;
  max-width: 480px;
`;

export default SignUpPage;
