import styled, { css } from 'styled-components';
import { WarningIcon } from '../icons/WarningIcon';

export type FormBaseProps<T> = {
  // for style
  className?: string;

  // for input
  id: string;
  name: string;
  value: T | undefined;
  placeholder?: string;
  readonly?: boolean;
  disabled?: boolean;

  // for label
  label: string;
  required?: boolean;
  inline?: boolean;

  // for feedback
  errorMessage?: string;
  description?: string;
};

type FormLabelProps = {
  className?: string;
  label: string;
  htmlFor?: string;
  required?: boolean;
  description?: string;
  inline?: boolean;
};

export const FormLabel = styled(function FormLabel({ label, ...props }: FormLabelProps) {
  return <label {...props}>{label}</label>;
})`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  ${({ required }) =>
    required &&
    css`
      &::after {
        content: '*';
        color: #c62828;
      }
    `};
`;

type FormDescriptionProps = {
  className?: string;
  description: string;
};

export const FormDescription = styled(function FormDescription({
  className,
  description,
}: FormDescriptionProps) {
  return (
    <div className={className}>
      <span>{description}</span>
    </div>
  );
})`
  margin: 8px 0;
  & > span {
    font-size: 12px;
    line-height: 18px;
  }
`;

type FormErrorMessageProps = {
  className?: string;
  message: string;
};

const StyledWarningIcon = styled(WarningIcon)`
  fill: #c62828;
  margin-right: 4px;
`;

export const FormErrorMessage = styled(function FormErrorMessage({
  className,
  message,
}: FormErrorMessageProps) {
  return (
    <div className={className}>
      <StyledWarningIcon size="small" />
      <span>{message}</span>
    </div>
  );
})`
  display: flex;
  margin: 8px 0;

  & > span {
    color: #c62828;
    font-size: 12px;
    line-height: 18px;
  }
`;
