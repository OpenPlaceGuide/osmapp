// this file is ignored by prettier
import React from 'react';

/*

// ios - pwa maskable icons (white background)
57x57 (iOS)
60x60 (iOS)
72x72 (iOS)
76x76 (iOS)
114x114 (iOS)
120x120 (iOS)
152x152 (iOS)
180x180 (iOS)

// others - pwa maskable icons (transparent)
48x48
96x96
144x144
192x192
256x256
384x384
512x512

*/

export const FaviconsOsmapp = () => (
  <>
    <link
      rel="shortcut icon"
      href="/osmapp/logo/osmapp_192.png"
      sizes="192x192"
    />
    <link
      rel="shortcut icon"
      href="/osmapp/logo/osmapp_256.png"
      sizes="256x256"
    />
    <link rel="shortcut icon" href="/osmapp/logo/osmapp_64.png" />
    <link rel="shortcut icon" href="/osmapp/favicon.ico" type="image/x-icon" />
    {/* Generated by https://realfavicongenerator.net/ */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/osmapp/logo/fav/apple-touch-icon.png"
    />{' '}
    {/* apple-touch-icon must have padding + white background */}
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/osmapp/logo/fav/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/osmapp/logo/fav/favicon-16x16.png"
    />
    <link
      rel="mask-icon"
      href="/osmapp/logo/fav/safari-pinned-tab.svg"
      color="#eb5757"
    />{' '}
    {/* For safari tab-favicon */}
    <link rel="manifest" href="/manifest-openclimbing.json" />
    <meta name="application-name" content="OsmAPP maps" />
    <meta name="apple-mobile-web-app-title" content="OsmAPP maps" />
    <meta name="theme-color" content="#ffffff" />{' '}
    {/* override for chrome desktop PWA */}
    <meta name="theme-color" content="#eb5757" />{' '}
    {/* HACK: second theme-color is ignored on desktop/mobile, but: makes Android PWA to take the color only from manifest */}
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />{' '}
    {/* TODO try black-translucent again + set body bgcolor */}
    <meta name="msapplication-TileColor" content="#9f00a7" />
    <meta
      name="msapplication-config"
      content="/osmapp/logo/fav/browserconfig.xml"
    />
    {/* splash screens for iOS https://appsco.pe/developer/splash-screens (from osmapp_256.png) */}
    <link
      href="/osmapp/logo/splash/iphone5_splash.png"
      media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href="/osmapp/logo/splash/iphone6_splash.png"
      media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href="/osmapp/logo/splash/iphoneplus_splash.png"
      media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
      rel="apple-touch-startup-image"
    />
    <link
      href="/osmapp/logo/splash/iphonex_splash.png"
      media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
      rel="apple-touch-startup-image"
    />
    <link
      href="/osmapp/logo/splash/iphonexr_splash.png"
      media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href="/osmapp/logo/splash/iphonexsmax_splash.png"
      media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
      rel="apple-touch-startup-image"
    />
    <link
      href="/osmapp/logo/splash/ipad_splash.png"
      media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href="/osmapp/logo/splash/ipadpro1_splash.png"
      media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href="/osmapp/logo/splash/ipadpro3_splash.png"
      media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
    <link
      href="/osmapp/logo/splash/ipadpro2_splash.png"
      media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
      rel="apple-touch-startup-image"
    />
  </>
);
