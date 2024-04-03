export type ApiResponseTypes = {
  'lego/minifigs/': {};
  'lego/minifigs/{set_num}/parts/': {};
};

export type ApiQueryParams = {
  'lego/minifigs/': {search?: string; page?: number; page_size?: number};
  'lego/minifigs/{set_num}/parts/': undefined;
};

export type ApiPath = keyof ApiQueryParams;
