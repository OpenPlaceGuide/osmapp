import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 4px;
  gap: 8px;
`;

const PlateLink = styled.a`
  display: inline-block;
  padding: 6px 12px;
  font-size: 1.125rem;
  line-height: 1.25;
  font-weight: 700;
  color: #fff;
  background-color: #00854d;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.9);

  &:hover {
    text-decoration: none;
    background-color: #006f3f;
  }
`;

const DirectoryLink = styled.a`
  padding: 6px 8px;
  font-size: 0.9375rem;
  font-weight: 500;
  color: ${({ theme }) => theme.palette.tertiary.main};
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    text-decoration: underline;
  }
`;

export const OpenPlaceGuideHeader = () => (
  <HeaderContainer>
    <Link href="/ethiopia" passHref legacyBehavior>
      <PlateLink>map.et</PlateLink>
    </Link>
    <Link href="/addis-ababa" passHref legacyBehavior>
      <DirectoryLink>Addis Ababa Business Directory</DirectoryLink>
    </Link>
  </HeaderContainer>
);
