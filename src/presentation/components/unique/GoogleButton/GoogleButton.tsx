import React from 'react';
import styled from 'styled-components';

import { Button } from '@/components/inputs/Button/Button';
import { SvgIcon } from '@/components/icons/SvgIcon';
import { GoogleIcon } from '@/components/icons/GoogleIcon';

type Props = {
  className?: string;
  text: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

export const GoogleButton = styled(
  React.memo(function GoogleButton({ className, text, onClick }: Props) {
    return (
      <Button className={className} color="primary" onClick={onClick}>
        <div>
          <GoogleIcon />
          <span>{text}</span>
        </div>
      </Button>
    );
  }),
)`
  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > ${SvgIcon} {
      width: 18px;
      height: 18px;
    }
    & > span {
      margin-left: 4px;
    }
  }
`;
