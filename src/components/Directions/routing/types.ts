import { NamedBbox } from '../../../services/getCenter';

export type Profile = 'car' | 'bike' | 'walk';

export type RoutingResult = {
  time: number; // minutes
  distance: number; // meters
  totalAscent: number; // meters
  router: string;
  link: string;
  bbox: NamedBbox;
  geojson: GeoJSON.GeoJSON;
};

export class PointsTooFarError extends Error {
  constructor() {
    super('Points are too far from road network');
  }
}
