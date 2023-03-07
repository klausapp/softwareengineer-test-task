// Original file: proto/tickets.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface DateRequest {
  'start'?: (_google_protobuf_Timestamp | null);
  'end'?: (_google_protobuf_Timestamp | null);
}

export interface DateRequest__Output {
  'start'?: (_google_protobuf_Timestamp__Output);
  'end'?: (_google_protobuf_Timestamp__Output);
}
