import styled from '@emotion/styled';
import { SEARCH_BOX_HEIGHT } from './consts';
import { css } from '@emotion/react';
import { isDesktop } from '../helpers';
import { Paper } from '@mui/material';

export const TopPanel = styled.div<{ $isMobileMode: boolean }>`
  position: absolute;
  min-height: ${SEARCH_BOX_HEIGHT}px;
  ${({ $isMobileMode, theme }) =>
    !$isMobileMode &&
    css`
      box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.12);
      background-color: ${theme.palette.background.searchBox};
    `}

  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  z-index: 1;

  width: 100%;
  @media ${isDesktop} {
    width: 410px;
  }
`;

export const StyledPaper = styled(Paper, {
  shouldForwardProp: (prop) => prop !== '$column',
})<{ $column?: boolean }>`
  width: 100%;
  padding: 2px 4px;
  display: flex;
  flex-direction: ${({ $column }) => ($column ? 'column' : 'row')};
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.searchInput};
  -webkit-backdrop-filter: blur(35px);
  backdrop-filter: blur(35px);

  .MuiAutocomplete-root {
    flex: 1;
  }
`;
