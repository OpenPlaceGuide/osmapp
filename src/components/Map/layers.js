// @flow

import mapboxStyle from './mapboxStyle';

export const sources = {
  openmaptiles: {
    type: 'vector',
    url: 'https://maps.tilehosting.com/data/v3.json?key=7dlhLl3hiXQ1gsth0kGu', // https://cloud.maptiler.com/account
  },
  osm_mapnik: {
    type: 'raster',
    tiles: [
      'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
      'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
    ],
    tileSize: 256,
  },
  // contours: {
  //   type: 'vector',
  //   url: 'mapbox://mapbox.mapbox-terrain-v2'
  // },
  // dem: {
  //   'type': 'raster-dem',
  //   'url': 'mapbox://mapbox.terrain-rgb'
  // }
};

export const backgroundLayers = [
  // {
  //     "id": "simple-tiles",
  //     "type": "raster",
  //     "source": "osm_mapnik",
  //     "minzoom": 0,
  //     "maxzoom": 22
  // },
  {
    id: 'background',
    type: 'background',
    paint: {
      'background-color': '#f8f4f0',
    },
  },
  // {
  //   'id': 'contours',
  //   'type': 'line',
  //   'source': 'contours',
  //   'source-layer': 'contour',
  //   'layout': {
  //     'visibility': 'visible',
  //     'line-join': 'round',
  //     'line-cap': 'round'
  //   },
  //   'paint': {
  //     'line-color': '#877b59',
  //     'line-width': 1
  //   }
  // },
  // {
  //   'id': 'hillshading',
  //   'source': 'dem',
  //   'type': 'hillshade'
  // },
];

function addHoverPaint(origStyle) {
  const value = [
    'case',
    ['boolean', ['feature-state', 'hover'], false],
    0.5,
    1,
  ];
  origStyle.layers
    .filter(x => x.id.match(/^poi-/))
    .forEach(x => {
      if (x.paint) {
        x.paint['icon-opacity'] = value;
      }
    });
  return origStyle;
}

export const style = addHoverPaint(mapboxStyle(sources, backgroundLayers));
const backgroundIds = backgroundLayers.map(x => x.id);
export const hoverLayers = style.layers
  .map(x => x.id)
  .filter(x => !(x in backgroundIds));