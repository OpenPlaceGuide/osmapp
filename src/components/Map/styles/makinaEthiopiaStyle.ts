import { OSMAPP_SOURCES } from '../consts';
import { basicStyle } from './basicStyle';

const sources = JSON.parse(JSON.stringify(OSMAPP_SOURCES));

sources.maptiler_planet.url =
  'https://8080-misty-glacier.agents.umans.ai/data/v3.json';

export const makinaEthiopiaStyle = { ...basicStyle, sources };
