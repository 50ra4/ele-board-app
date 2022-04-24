import styled from 'styled-components';
import { TemplateNo1 } from 'src/presentation/templates/TemplateNo1';
import { OutlineDescription } from '@/components/display/OutlineDescription/OutlineDescription';
import { Link } from '@/components/navigation/Link/Link';

function HomePage() {
  return (
    <TemplateNo1>
      <Root>
        <StyledOutlineDescription>
          初めての方は
          <Link href="/private/signUp" text="アカウント登録" />
        </StyledOutlineDescription>
        <StyledOutlineDescription>
          既にアカウントをお持ちの方は
          <Link href="/private/login" text="ログイン" />
        </StyledOutlineDescription>
      </Root>
    </TemplateNo1>
  );
}

const Root = styled.div`
  margin-top: 100px;
`;

const StyledOutlineDescription = styled(OutlineDescription)`
  margin-top: 16px;
  max-width: 480px;
`;

export default HomePage;
