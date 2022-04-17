import styled from 'styled-components';
import { Divider } from '../utils/Divider/Divider';

type OwnProps = {
  title: string | React.ReactNode;
};

export type CardProps = OwnProps & Omit<React.ComponentPropsWithoutRef<'section'>, keyof OwnProps>;

const CardTitle = styled.h3`
  line-height: 32px;
  height: 32px;
  vertical-align: middle;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 18px;
  margin: 4px;
`;
const CardContent = styled.div`
  padding: 2px 4px 4px;
`;

export const Card = styled(function Card({ title, children, className, ...rest }: CardProps) {
  return (
    <section className={className} {...rest}>
      <CardTitle>{title}</CardTitle>
      <Divider />
      <CardContent>{children}</CardContent>
    </section>
  );
})`
  background-color: ${({ theme }) => theme.color.card.background};
  color: ${({ theme }) => theme.color.card.font};
  padding: 4px;
`;
