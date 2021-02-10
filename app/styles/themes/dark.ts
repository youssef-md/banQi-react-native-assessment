import { darken, opacify } from 'polished';

import { white, black, pink, pink_dark } from '../colors';

export default {
  type: 'dark',
  colors: {
    primary: black,
    primaryDetail: opacify(0.8, white),
    secondary: white,
    secondaryLighter: darken(0.4, white),
    secondaryDetail: darken(0.8, white),
    accent: darken(0.15, pink),
    accentDarker: darken(0.1, pink_dark),
    accentDetail: opacify(0.8, pink),
    textOnAccent: white,
  },
};
