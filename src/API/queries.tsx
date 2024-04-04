import {useQuery} from '@tanstack/react-query';
import {useMemo} from 'react';

import {getRandomArrayElements} from '../utils/utils';
import {QueryKey} from './consts';
import {fetchMinifigParts, fetchMinifigs} from './fetch.api';
import {ApiQueryParams} from './types';

export const useFetchMinifigs = (
  queryParams?: ApiQueryParams['lego/minifigs/'],
) => {
  const {data, error, isLoading} = useQuery({
    queryKey: [QueryKey.Minifigs],
    queryFn: () => fetchMinifigs(queryParams),
  });

  return {data, error, isLoading};
};

const AMOUNT_OF_RANDOM_MINIFIGS = 5;

export const useFetchRandomPotterMinifigs = () => {
  const {data, ...rest} = useFetchMinifigs({search: 'harry potter'});

  return useMemo(
    () => ({
      data: {
        ...data,
        results: getRandomArrayElements(
          data?.results,
          AMOUNT_OF_RANDOM_MINIFIGS,
        ),
      },
      ...rest,
    }),
    [data, rest],
  );
};

export const useFetchMinifigParts = (
  setNumber: string,
  queryParams?: ApiQueryParams['lego/minifigs/{set_num}/parts/'],
) => {
  const {data, error, isLoading} = useQuery({
    queryKey: [QueryKey.MinifigParts],
    queryFn: () => fetchMinifigParts(setNumber, queryParams),
  });

  return {data, error, isLoading};
};
