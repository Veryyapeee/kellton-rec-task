import {PropsWithChildren} from 'react';

type Props = PropsWithChildren & {
  condition: unknown;
};

export const If = ({condition, children}: Props) => {
  return <>{condition ? children : null}</>;
};
