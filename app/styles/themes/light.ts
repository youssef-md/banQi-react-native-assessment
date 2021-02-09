import { lighten } from 'polished';

import { white, black, pink, pink_dark } from '../colors';

export default {
  type: 'light',
  colors: {
    primary: white,
    primaryDetail: lighten(0.8, white),
    secondary: black,
    secondaryLighter: lighten(0.6, black),
    accent: pink,
    accentDarker: pink_dark,
    accentDetail: lighten(0.8, pink),
    textOnAccent: white,
  },
};
