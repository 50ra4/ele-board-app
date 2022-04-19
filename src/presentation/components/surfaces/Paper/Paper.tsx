import styled from 'styled-components';

// eslint-disable-next-line @typescript-eslint/ban-types
type OwnProps = {};

export type PaperProps = OwnProps & Omit<React.ComponentPropsWithoutRef<'section'>, keyof OwnProps>;

const PaperContent = styled.div`
  padding: 2px 4px 4px;
`;

export const Paper = styled(function Paper({ children, className, ...rest }: PaperProps) {
  return (
    <section className={className} {...rest}>
      <PaperContent>{children}</PaperContent>
    </section>
  );
})`
  background-color: ${({ theme }) => theme.color.card.background};
  color: ${({ theme }) => theme.color.card.font};
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.color.border.light};
`;
