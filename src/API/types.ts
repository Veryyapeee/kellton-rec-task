import {ShippingFormData} from '../screens/ShippingFormScreen/types';

export type PurchasePayload = {
  shippingInfo: ShippingFormData;
  minifig_id: string;
};

export type Minifig = {
  set_num: string;
  name: string;
  set_img_url: string;
  set_url: string;
};

type MinifigsResponse = {
  results: Minifig[];
};

export type MinifigPart = {
  part: {
    part_num: string;
    name: string;
    part_url: string;
    part_img_url: string;
  };
};

type MinifigPartResponse = {
  count: number;
  results: MinifigPart[];
};

export type ApiResponseTypes = {
  'lego/minifigs/': MinifigsResponse;
  'lego/minifigs/{set_num}/parts/': MinifigPartResponse;
};

export type ApiQueryParams = {
  'lego/minifigs/': {search?: string; page?: number; page_size?: number};
  'lego/minifigs/{set_num}/parts/': undefined;
};

export type ApiPath = keyof ApiQueryParams;
