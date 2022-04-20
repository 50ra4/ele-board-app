import React from 'react';
import styled from 'styled-components';
import { Button, ButtonProps } from '../Button/Button';

type OwnProps = {
  text: string;
};

export type TextButtonProps = OwnProps & Omit<ButtonProps, keyof OwnProps | 'children'>;

const UnstyledTextButton = React.memo(function TextButton({ text, ...props }: TextButtonProps) {
  return <Button {...props}>{text}</Button>;
});

export const TextButton = styled(UnstyledTextButton)``;
