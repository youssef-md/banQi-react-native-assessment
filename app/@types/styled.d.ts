import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;
    colors: {
      primary: string;
      primaryDetail: string;
      secondary: string;
      accent: string;
      accentDarker: string;
      accentDetail: string;
      textOnAccent: string;
    };
  }
}
