import { lighten, transparentize } from 'polished';

import { white, black, pink, pink_dark } from '../colors';

export default {
  type: 'light',
  colors: {
    primary: white,
    primaryDetail: lighten(0.8, white),
    secondary: black,
    secondaryLighter: lighten(0.4, black),
    secondaryDetail: lighten(0.7, black),
    accent: pink,
    accentDarker: pink_dark,
    accentDetail: transparentize(0.94, pink),
    textOnAccent: white,
  },
};
