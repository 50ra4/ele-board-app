import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import React from 'react';
import styled from 'styled-components';

export type LinkProps = {
  className?: string;
  text: string;
} & Omit<NextLinkProps, 'passHref'>;

const AppLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.color.font.link};
  &:visited {
    color: ${({ theme }) => theme.color.font.link};
  }
  &:hover,
  &:active {
    color: ${({ theme }) => theme.color.font.link};
    text-decoration: underline;
  }
`;

/**
 * @see https://nextjs.org/docs/api-reference/next/link
 */
export const Link = styled(function Link({ className, text, ...nextLinkProps }: LinkProps) {
  return (
    <NextLink passHref={true} {...nextLinkProps}>
      <AppLink className={className}>{text}</AppLink>
    </NextLink>
  );
})``;
