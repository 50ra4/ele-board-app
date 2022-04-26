import styled from 'styled-components';
import { TemplateNo1 } from 'src/presentation/templates/TemplateNo1';
import { OutlineDescription } from '@/components/display/OutlineDescription/OutlineDescription';
import { Link } from '@/components/navigation/Link/Link';

function TopPage() {
  return (
    <TemplateNo1>
      <StyledOutlineDescription>
        初めての方は
        <Link href="/private/signUp">アカウント登録</Link>
      </StyledOutlineDescription>
      <StyledOutlineDescription>
        既にアカウントをお持ちの方は
        <Link href="/private/login">ログイン</Link>
      </StyledOutlineDescription>
    </TemplateNo1>
  );
}

const StyledOutlineDescription = styled(OutlineDescription)`
  margin-top: 16px;
  &:first-of-type {
    margin-top: 100px;
  }
  max-width: 480px;
`;

export default TopPage;
