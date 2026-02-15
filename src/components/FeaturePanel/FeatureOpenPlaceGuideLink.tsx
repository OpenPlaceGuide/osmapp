import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { t } from '../../services/intl';
import { fetchJson } from '../../services/fetch';
import { useFeatureContext } from '../utils/FeatureContext';
import { getDetailPageLink } from '../../services/helpers';
import { LonLat } from '../../services/types';

const Spacer = styled.div`
  padding-bottom: 10px;
`;

type Instance = {
  url: string;
  name: string;
};

const getData = async (center: LonLat, osmId: string) => {
  if (center === undefined || !center.length) {
    return null;
  }
  const body = await fetchJson<Instance[]>(
    `https://discover.openplaceguide.org/v2/discover?lat=${center[1]}&lon=${center[0]}&osmId=${osmId}`,
  );

  return body;
};

const OpenPlaceGuideLink = () => {
  const [instances, setInstances] = useState<Instance[]>([]);
  const { feature } = useFeatureContext();

  const selfInstance = {
    url: getDetailPageLink(feature),
    name: 'map.et',
  };

  return (
    <>
      <Button variant="contained" href={selfInstance.url}>
        {t('featurepanel.detail_page')}
      </Button>
      <Spacer />
    </>
  );
};

const supportedCountries = ['et']; // refer to the list of countries here: https://github.com/OpenPlaceGuide/discover-cf-worker/blob/main/index.js#L43

export const FeatureOpenPlaceGuideLink = () => {
  const { feature } = useFeatureContext();
  if (!supportedCountries.includes(feature.countryCode)) {
    return null;
  }

  return <OpenPlaceGuideLink />;
};
