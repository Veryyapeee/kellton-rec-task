import {ControllerProps, UseFieldArrayProps} from 'react-hook-form';

export type InputValidationRules = ControllerProps['rules'] & {
  match?: {value: string; message?: string};
};

export type CommonChildProps = {
  name: UseFieldArrayProps['name'];
  rules: InputValidationRules;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  errorMessage?: string;
  onBlur?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (...event: any[]) => void;
};

export type CommonChildPropsComponent = {
  validMessage?: string;
};

export type FormElementCommonProps = CommonChildProps &
  CommonChildPropsComponent;
