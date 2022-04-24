import { useRouter } from 'next/router';
import { LoginMethod, LoginSelectCard } from 'src/presentation/parts/auth/LoginSelectCard';
import { TemplateNo1 } from 'src/presentation/templates/TemplateNo1';
import styled from 'styled-components';

function LoginPage() {
  const router = useRouter();

  const onSelect = (method: LoginMethod) => {
    if (method === 'mail') {
      router.push({ href: router.pathname, query: { type: 'mail' } });
    }
    console.error(`${method} is not implemented.`);
  };

  return (
    <TemplateNo1>
      <StyledLoginSelectCard onSelect={onSelect} />
    </TemplateNo1>
  );
}

const StyledLoginSelectCard = styled(LoginSelectCard)`
  margin-top: 100px;
  max-width: 400px;
`;

export default LoginPage;
