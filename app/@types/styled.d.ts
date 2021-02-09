import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;
    colors: {
      primary: string;
      primaryLighter: string;
      primaryDetail: string;
      secondary: string;
      secondaryLighter: string;
      accent: string;
      accentDarker: string;
      accentDetail: string;
    };
  }
}
