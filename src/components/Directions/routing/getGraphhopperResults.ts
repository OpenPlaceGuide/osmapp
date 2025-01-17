import { PointsTooFarError, Profile, RoutingResult } from './types';
import { LonLat } from '../../../services/types';
import { fetchJson } from '../../../services/fetch';
import { getBbox } from '../../../services/getCenter';
import { FetchError } from '../../../services/helpers';

const API_KEY = `d45c047b-c49e-447e-b99e-53481fbc4eee`;

export const profiles: Record<Profile, string> = {
  car: 'car',
  bike: 'bike',
  walk: 'foot',
};

export const getGraphhopperResults = async (
  mode: Profile,
  points: LonLat[],
): Promise<RoutingResult> => {
  const profile = profiles[mode];
  const from = points[0].toReversed().join(','); // lon,lat!
  const to = points[1].toReversed().join(',');
  const url = `https://graphhopper.com/api/1/route?point=${from}&point=${to}&vehicle=${profile}&key=${API_KEY}&type=json&points_encoded=false&instructions=false&snap_prevention=ferry`;

  const data = await fetchJson(url);

  const [w, n, e, s] = data.paths[0].bbox; // "bbox":[11.588883,49.926107,11.812509,50.35675]

  return {
    time: data.paths[0].time / 1000,
    distance: data.paths[0].distance,
    totalAscent: data.paths[0].ascend,
    router: 'GraphHopper',
    link: 'https://graphhopper.com/',
    bbox: { w, s, e, n },
    geojson: data.paths[0].points,
  };
};
