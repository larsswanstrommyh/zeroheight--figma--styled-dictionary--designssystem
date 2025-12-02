import StyleDictionary from 'style-dictionary';

import fastGlob from 'fast-glob';
import { basename } from 'node:path';




const themes = await fastGlob('./src/tokens/*.json');

themes.map(function (themeFile) {

  const theme = basename(themeFile).replace(/(token_Tokens_|\.json)/g, '').toLowerCase();

  new StyleDictionary({
    "source": [themeFile],
    "platforms": {
      "css": {
        "transformGroup": "css",
        "prefix": "myh",
        "buildPath": `build/${theme}/css/`,
        "transforms": ["type-number-to-px"],
        "files": [
          {
            "destination": "_variables.css",
            "format": "css/variables"
          }
        ]
      },
      "scss": {
        "transformGroup": "scss",
        "prefix": "myh",
        "buildPath": `build/`,
        "files": [
          {
            "destination": "_variables.scss",
            "format": "scss-variables-pointing-at-css-variables"
          }
        ]
      },
    }
  })
    .buildAllPlatforms();
});

StyleDictionary.registerFormat({
  name: 'scss-variables-pointing-at-css-variables',
  format: async ({ dictionary, file, options }) => {

    const variables = dictionary.allTokens.map(({ name }) => `$${name}: var(--${name});`)

    return variables.join('\n');
  },
});

StyleDictionary.registerTransform({
  type: `value`,
  transitive: true,
  name: `type-number-to-px`,
  filter: (token, options) => token.original.type == 'number',
  transform: (token) => {
    return `${token.value}px`;
  },
});