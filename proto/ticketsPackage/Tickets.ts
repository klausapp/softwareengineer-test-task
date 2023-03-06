// Original file: proto/tickets.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { PingRequest as _ticketsPackage_PingRequest, PingRequest__Output as _ticketsPackage_PingRequest__Output } from '../ticketsPackage/PingRequest';
import type { PingResponse as _ticketsPackage_PingResponse, PingResponse__Output as _ticketsPackage_PingResponse__Output } from '../ticketsPackage/PingResponse';

export interface TicketsClient extends grpc.Client {
  PingPong(argument: _ticketsPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ticketsPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _ticketsPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ticketsPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _ticketsPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ticketsPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _ticketsPackage_PingRequest, callback: grpc.requestCallback<_ticketsPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _ticketsPackage_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ticketsPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _ticketsPackage_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ticketsPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _ticketsPackage_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ticketsPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _ticketsPackage_PingRequest, callback: grpc.requestCallback<_ticketsPackage_PingResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TicketsHandlers extends grpc.UntypedServiceImplementation {
  PingPong: grpc.handleUnaryCall<_ticketsPackage_PingRequest__Output, _ticketsPackage_PingResponse>;
  
}

export interface TicketsDefinition extends grpc.ServiceDefinition {
  PingPong: MethodDefinition<_ticketsPackage_PingRequest, _ticketsPackage_PingResponse, _ticketsPackage_PingRequest__Output, _ticketsPackage_PingResponse__Output>
}
