import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { TicketsClient as _ticketsPackage_TicketsClient, TicketsDefinition as _ticketsPackage_TicketsDefinition } from './ticketsPackage/Tickets';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  ticketsPackage: {
    PingRequest: MessageTypeDefinition
    PingResponse: MessageTypeDefinition
    Tickets: SubtypeConstructor<typeof grpc.Client, _ticketsPackage_TicketsClient> & { service: _ticketsPackage_TicketsDefinition }
  }
}

