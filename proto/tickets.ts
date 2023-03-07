import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TicketsClient as _ticketsPackage_TicketsClient, TicketsDefinition as _ticketsPackage_TicketsDefinition } from './ticketsPackage/Tickets';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  ticketsPackage: {
    AgregatedResponse: MessageTypeDefinition
    AgregatedResponses: MessageTypeDefinition
    DateRequest: MessageTypeDefinition
    PingRequest: MessageTypeDefinition
    PingResponse: MessageTypeDefinition
    Tickets: SubtypeConstructor<typeof grpc.Client, _ticketsPackage_TicketsClient> & { service: _ticketsPackage_TicketsDefinition }
  }
}

