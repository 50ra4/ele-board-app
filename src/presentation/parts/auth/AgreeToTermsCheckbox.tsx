import styled from 'styled-components';

import { Link } from '@/components/navigation/Link/Link';
import { Checkbox, CheckboxLabel } from '@/components/inputs/Checkbox/Checkbox';

export const AgreeToTermsCheckbox = ({
  className,
  checked,
  onChange,
}: {
  className?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) => {
  return (
    <div className={className}>
      <StyledCheckbox
        id="agreeToTerms"
        name="agreeToTerms"
        value={checked}
        checked={checked}
        onChange={onChange}
        color="primary"
      >
        <div>
          <Link href="/private/terms" target="_blank">
            利用規約
          </Link>
          及び
          <Link href="/private/privacy" target="_blank">
            個人情報の取り扱い
          </Link>
          に同意の上、アカウントを作成する
        </div>
      </StyledCheckbox>
    </div>
  );
};

const StyledCheckbox = styled(Checkbox)`
  & > ${CheckboxLabel} {
    align-items: flex-start;
    font-size: 12px;
  }
  & ${Link} {
    margin-right: 4px;
  }
  & ${Link}:not(:first-of-type) {
    margin-left: 4px;
  }
`;
