import React from 'react';
import { UIColor } from '@swingset/data';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {
  color?: UIColor;
  style?: any;
  hidden?: boolean;
}

const StyledHeader = styled.div`
  color: ${({ color, theme }) => color || theme.main};
`;

/**
 * Header component
 *
 * @param props HeaderProps
 */
export function Header(props: HeaderProps) {
  return (
    <StyledHeader className="card" {...props}>
      <h1>Welcome to Header!</h1>
    </StyledHeader>
  );
}

export default Header;
