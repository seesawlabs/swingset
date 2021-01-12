import React from 'react';

import styled from 'styled-components';
import { UIColor } from '@swingset/ui-data';

/* eslint-disable-next-line */
export interface FooterProps {
  color: UIColor;
  fontSize?: number;
}

const StyledFooter = styled.div`
  color: ${({ color, ...props }) => color};
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;

export function Footer(props: FooterProps) {
  return (
    <StyledFooter {...props}>
      <h1>Welcome to Footer!</h1>
    </StyledFooter>
  );
}

export default Footer;
