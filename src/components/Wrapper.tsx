import {PropsWithChildren, ReactNode} from 'react';

type WrapperProps = PropsWithChildren & {
  condition: unknown;
  wrapper: (children?: ReactNode) => ReactNode;
};

export const WrapperComponent = ({
  children,
  condition,
  wrapper,
}: WrapperProps) => {
  return <>{condition ? wrapper(children) : children}</>;
};
