import { Snippet } from './snippet';
import { Statistics } from './statistics';
import { ResponseExample } from '../response-example';

export interface ItemResponse {
  kind: string,
  etag: string,
  id: string,
  snippet: Snippet,
  statistics: Statistics,
}

const Item: ItemResponse = ResponseExample.items[0];
