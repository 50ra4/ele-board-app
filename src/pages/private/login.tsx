import { useRouter } from 'next/router';
import { LoginMethod, LoginSelectCard } from 'src/presentation/parts/auth/LoginSelectCard';
import { MailLoginForm } from 'src/presentation/parts/auth/MailLoginForm';
import { TemplateNo1 } from 'src/presentation/templates/TemplateNo1';
import styled from 'styled-components';

function LoginPage() {
  const router = useRouter();

  const showMailLoginForm = router.query?.type === 'mail';

  const onSubmit = (value: { email: string; password: string }) => {
    // TODO:
  };

  const onSelect = (method: LoginMethod) => {
    if (method === 'mail') {
      router.push({ href: router.pathname, query: { type: 'mail' } });
    }
    console.error(`${method} is not implemented.`);
  };

  return (
    <TemplateNo1>
      {showMailLoginForm ? (
        <StyledMailLoginForm onSubmit={onSubmit} />
      ) : (
        <StyledLoginSelectCard onSelect={onSelect} />
      )}
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

export default LoginPage;
