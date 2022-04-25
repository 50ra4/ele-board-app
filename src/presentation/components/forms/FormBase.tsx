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
};

const createAriaDescribedby = (id?: string) => (id ? `${id}-describe` : undefined);

export const FormLabel = styled(function FormLabel({ label, htmlFor, ...props }: FormLabelProps) {
  const ariaDescribedby = createAriaDescribedby(htmlFor);
  return (
    <label {...props} htmlFor={htmlFor} aria-describedby={ariaDescribedby}>
      {label}
    </label>
  );
})`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  ${({ required }) =>
    required &&
    css`
      &::after {
        content: '*';
        color: #c62828; // FIXME: replace with theme.color
      }
    `};
`;

type FormDescriptionProps = {
  className?: string;
  id: string;
  description: string;
};

export const FormDescription = styled(function FormDescription({
  className,
  id,
  description,
}: FormDescriptionProps) {
  const ariaDescribedby = createAriaDescribedby(id);
  return (
    <div className={className}>
      <span id={ariaDescribedby}>{description}</span>
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
