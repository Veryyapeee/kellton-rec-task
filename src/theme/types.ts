export type Theme = {
  palette: {
    font: {
      primary: string;
      secondary: string;
      danger: string;
      contrast: string;
    };
    button: {
      backgroundPrimary: string;
      fontPrimary: string;
    };
    app: {
      backgroundPrimary: string;
      backgroundSecondary: string;
      contrast: string;
    };
  };
  typography: {
    text: {
      sm: number;
      md: number;
      lg: number;
      xlg: number;
    };
  };
};
