import React from 'react';
import { HeaderColor } from '@swingset/data';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {
  color?: HeaderColor;
  style?: any;
}

const StyledHeader = styled.div`
  color: ${({ color, theme }) => color || theme.main};
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader className="card" {...props}>
      <h1>Welcome to Header!</h1>
    </StyledHeader>
  );
}

export default Header;
