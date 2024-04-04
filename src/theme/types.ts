export type Theme = {
  palette: {
    font: {
      primary: string;
      secondary: string;
      danger: string;
      contrast: string;
    };
    button: {
      primary: string;
      disabled: string;
    };
    app: {
      backgroundPrimary: string;
      backgroundSecondary: string;
      placeholder: string;
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

export type TextVariant = keyof Theme['palette']['font'];

export type TextSizeVariant = keyof Theme['typography']['text'];

export type ButtonVariant = keyof Theme['palette']['button'];

export type AppColor = keyof Theme['palette']['app'];

export type Pixels = `${number}px`;
export type Percentages = `${number}%`;
export type Common = 'auto' | 'unset';

export type DimensionValue = Pixels | Percentages | Common;
