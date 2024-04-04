import {createContext, PropsWithChildren, useContext, useState} from 'react';

import {Minifig} from '../API/types';

type MinifigContext = {
  minifig?: Minifig;
  setMinifig: (minifig?: Minifig) => void;
};

const MinifigContext = createContext<MinifigContext>({
  setMinifig: () => {},
  minifig: undefined,
});

const MinifixContextProvider = ({children}: PropsWithChildren) => {
  const [minifig, setMinifig] = useState<Minifig | undefined>();

  return (
    <MinifigContext.Provider value={{minifig, setMinifig}}>
      {children}
    </MinifigContext.Provider>
  );
};

export const useMinifigContext = () => useContext(MinifigContext);

export default MinifixContextProvider;
