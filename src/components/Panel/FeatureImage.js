// @flow

import styled from 'styled-components';
import Share from '@material-ui/icons/Share';
import StarBorder from '@material-ui/icons/StarBorder';
import Directions from '@material-ui/icons/Directions';
import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';

import MakiIcon from '../../assets/MakiIcon';

const Wrapper = styled.div`
  position: relative;
  background: url(${({ link }) => link}) center center no-repeat;
  background-size: cover;
  height: 238px;
  min-height: 238px; /* otherwise it shrinks b/c of flex*/

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
        to bottom,
        rgba(55, 71, 79, 0.16),
        rgba(55, 71, 79, 0.16)
      ),
      linear-gradient(to bottom, rgba(0, 0, 0, 0) 71%, #000000);
    // background-image: linear-gradient(to bottom right,#002f4b,#dc4225);
    // opacity: .6;
  }
`;

const StyledIconButton = styled(IconButton)`
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Bottom = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
`;

const PoiType = styled.div`
  color: #fff;
  margin: 0 auto 0 15px;
  font-size: 13px;

  svg {
    vertical-align: bottom;
    margin-right: 5px;
  }
`;

const FeatureImage = ({ link }) => (
  <Wrapper link={link}>
    <Bottom>
      <PoiType>
        <MakiIcon color="#fff" />
        supermarket
      </PoiType>

      <StyledIconButton>
        <Share nativeColor="#fff" titleAccess="Sdílet" />
      </StyledIconButton>
      <StyledIconButton>
        <StarBorder nativeColor="#fff" titleAccess="Uložit" />
      </StyledIconButton>
      <StyledIconButton>
        <Directions nativeColor="#fff" titleAccess="Trasa" />
      </StyledIconButton>
    </Bottom>
  </Wrapper>
);

export default FeatureImage;