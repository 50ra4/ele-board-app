import { ArrowLeftIcon } from '@/components/icons/ArrowLeftIcon';
import { SvgIcon } from '@/components/icons/SvgIcon';
import { Divider } from '@/components/utils/Divider/Divider';
import { useState } from 'react';
import styled, { css } from 'styled-components';

type OwnProps = {
  id: string;
  title: string;
  disabled?: boolean;
  defaultExpanded: boolean;
};

export type AccordionProps = OwnProps &
  Omit<React.ComponentPropsWithoutRef<'section'>, keyof OwnProps>;

const AccordionHeader = styled.button<{ expanded: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 4px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  background-color: ${({ theme }) => theme.color.card.background};
  color: ${({ theme }) => theme.color.card.font};

  & > ${SvgIcon} {
    width: 24px;
    height: 24px;
    transition: transform 0.3s linear;
    transform: ${({ expanded }) => `rotate(${expanded ? 90 : 270}deg)`};
  }
`;

const AccordionTitle = styled.h3`
  display: block;
  flex: 1 1 auto;
  line-height: 32px;
  height: 32px;
  text-align: left;
  vertical-align: middle;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 18px;
  margin: 4px;
  ${({ theme }) => theme.ellipsis(1)}
`;

const AccordionContent = styled.div<{ expanded: boolean }>`
  ${({ expanded }) =>
    expanded
      ? css`
          padding: 2px 4px 4px;
          transition: height 0.3s, opacity 0.3s linear;
          height: auto;
          opacity: 1;
          padding: 4px;
        `
      : css`
          overflow: hidden;
          height: 0;
          opacity: 0;
        `}
`;

const createAccordionHeaderId = (id: string) => `accordion-${id}-header`;
const createAccordionSectionId = (id: string) => `accordion-${id}-section`;

export const Accordion = styled(function Accordion({
  id,
  title,
  defaultExpanded,
  disabled,
  children,
  ...otherProps
}: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const headerId = createAccordionHeaderId(id);
  const sectionId = createAccordionSectionId(id);

  return (
    <section {...otherProps}>
      <AccordionHeader
        id={headerId}
        expanded={isExpanded}
        aria-controls={sectionId}
        aria-disabled={!isExpanded}
        aria-expanded={isExpanded}
        onClick={() => {
          if (disabled) return;
          setIsExpanded(!isExpanded);
        }}
      >
        <AccordionTitle>{title}</AccordionTitle>
        <ArrowLeftIcon color="primary" />
      </AccordionHeader>
      {isExpanded && <Divider />}
      <AccordionContent id={sectionId} expanded={isExpanded} aria-labelledby={headerId}>
        {children}
      </AccordionContent>
    </section>
  );
})`
  background-color: ${({ theme }) => theme.color.card.background};
  color: ${({ theme }) => theme.color.card.font};
  padding: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;
