import {ElementType} from 'react';

import {ScreenConfig} from './types';

type RenderStackProps = {
  screens: ScreenConfig[];
  Screen: ElementType;
};

export const renderStack = ({screens, Screen}: RenderStackProps) => {
  return screens.map(({name, component, options}) => (
    <Screen
      key={name}
      name={name}
      component={component}
      options={options || {}}
    />
  ));
};
