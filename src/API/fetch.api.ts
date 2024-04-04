import {AxiosResponse} from 'axios';

import {waitFor} from '../utils/utils';
import {axiosInstance} from './axios';
import {
  ApiPath,
  ApiQueryParams,
  ApiResponseTypes,
  PurchasePayload,
} from './types';

const fetchFromApi = <Path extends ApiPath>(
  path: Path,
  queryParams?: ApiQueryParams[Path],
): Promise<AxiosResponse<ApiResponseTypes[Path]>> =>
  axiosInstance.get<ApiResponseTypes[Path]>(path, {
    params: queryParams,
  });

export const fetchMinifigs = async (
  queryParams?: ApiQueryParams['lego/minifigs/'],
) => {
  const {data} = await fetchFromApi('lego/minifigs/', queryParams);
  return data;
};

export const fetchMinifigParts = async (
  minifigId?: string,
  queryParams?: ApiQueryParams['lego/minifigs/{set_num}/parts/'],
) => {
  const path =
    `lego/minifigs/${minifigId}/parts/` as 'lego/minifigs/{set_num}/parts/';
  const {data} = await fetchFromApi(path, queryParams);
  return data;
};

// Normally this would be a mutation to submit purchase
export const submitPurchase = async (_: PurchasePayload) => {
  // Simulation of loading
  await waitFor(3000);

  return Promise.resolve({});
};
