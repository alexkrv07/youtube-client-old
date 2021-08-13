import { PageInfo } from './page-info';
import { ItemResponse } from './item-response';
import { ResponseExample } from '../response-example';

export interface Response {
  kind: string,
  etag: string,
  pageInfo: PageInfo,
  items: ItemResponse[],
}

const response: Response = ResponseExample;
