import {useQuery} from '@tanstack/react-query';

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
