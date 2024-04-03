import {AxiosResponse} from 'axios';

import {axiosInstance} from './axios';
import {ApiPath, ApiQueryParams, ApiResponseTypes} from './types';

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
  minifigId: string,
  queryParams?: ApiQueryParams['lego/minifigs/{set_num}/parts/'],
) => {
  const path = `lego/minifigs/${minifigId}/parts/` as ApiPath;
  const {data} = await fetchFromApi(path, queryParams);
  return data;
};
