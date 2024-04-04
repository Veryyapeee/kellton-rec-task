import {useQuery} from '@tanstack/react-query';

import {getRandomArrayElements} from '../utils/utils';
import {QueryKey} from './consts';
import {fetchMinifigParts, fetchMinifigs} from './fetch.api';
import {ApiQueryParams} from './types';

const AMOUNT_OF_RANDOM_MINIFIGS = 5;
const POTTER_SEARCH_PHRASE = 'harry potter';

export const useFetchRandomPotterMinifigs = () => {
  const {data, error, isLoading} = useQuery({
    queryKey: [QueryKey.Minifigs],
    queryFn: async () => {
      const resData = await fetchMinifigs({search: POTTER_SEARCH_PHRASE});
      return getRandomArrayElements(resData.results, AMOUNT_OF_RANDOM_MINIFIGS);
    },
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
