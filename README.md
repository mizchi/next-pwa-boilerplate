# Next PWA Static

Generate configurable app by next (export)

![](https://gyazo.com/f6900f1410136839d8c7a88349c5d192.png)

* next.js
* workbox
* yarn
* flow

## How to Devolop

Run dev server.

```
yarn install
yarn server:dev
```

Write your route actions to `src/routes.js` by next export rules

## How to Deploy (netlify)

```sh
yarn deploy:static
```

## Edit PWA splash screen

* Generate icon with https://app-manifest.firebaseapp.com/
* Put icons to `src/client/static/icons`.
* Edit `script/build-manifest.js` to your icon paths.
