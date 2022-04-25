import styled, { css } from 'styled-components';
import { ColorPalette } from 'src/presentation/styles/theme';

type OwnProps = {
  text: string;
  color: ColorPalette;
  show?: boolean;
};

export type TooltipProps = OwnProps & Omit<React.ComponentPropsWithoutRef<'div'>, keyof OwnProps>;

export const TooltipText = styled.span`
  visibility: hidden;
  min-width: 120px;
  text-align: center;
  padding: 8px;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  margin-bottom: 16px; /** border * 2 */
  left: calc(50%);
  margin-left: -60px; /** width / 2 */

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -8px;
    border-width: 8px;
    border-style: solid;
  }
`;

/**
 * @see https://www.w3schools.com/howto/howto_css_tooltip.asp
 */
export const Tooltip = styled(function Tooltip({
  className,
  color,
  children,
  text,
  ...props
}: TooltipProps) {
  return (
    <div className={className} {...props}>
      {children}
      <TooltipText color={color}>{text}</TooltipText>
    </div>
  );
})`
  position: relative;
  display: inline-block;
  z-index: ${({ theme }) => theme.zIndex.tooltip};

  & > ${TooltipText} {
    background-color: ${({ theme, color }) => theme.color[color].background};
    color: ${({ theme, color }) => theme.color[color].font};

    &:after {
      border-color: ${({ theme, color }) =>
        `${theme.color[color].background} transparent transparent transparent`};
    }
    ${({ show }) =>
      show &&
      css`
        visibility: visible;
        opacity: 1;
      `}
  }
`;
