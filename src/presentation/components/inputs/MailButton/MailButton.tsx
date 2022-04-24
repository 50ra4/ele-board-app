import React from 'react';
import styled from 'styled-components';

import { MailIcon } from '@/components/icons/MailIcon';
import { Button } from '@/components/inputs/Button/Button';
import { SvgIcon } from '@/components/icons/SvgIcon';

type Props = {
  className?: string;
  text: string;
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
};

export const MailButton = styled(
  React.memo(function MailButton({ className, text, onClick }: Props) {
    return (
      <Button className={className} color="primary" onClick={onClick}>
        <div>
          <MailIcon />
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
