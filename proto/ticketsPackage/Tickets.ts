// Original file: proto/tickets.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AgregatedResponses as _ticketsPackage_AgregatedResponses, AgregatedResponses__Output as _ticketsPackage_AgregatedResponses__Output } from '../ticketsPackage/AgregatedResponses';
import type { DateRequest as _ticketsPackage_DateRequest, DateRequest__Output as _ticketsPackage_DateRequest__Output } from '../ticketsPackage/DateRequest';
import type { PingRequest as _ticketsPackage_PingRequest, PingRequest__Output as _ticketsPackage_PingRequest__Output } from '../ticketsPackage/PingRequest';
import type { PingResponse as _ticketsPackage_PingResponse, PingResponse__Output as _ticketsPackage_PingResponse__Output } from '../ticketsPackage/PingResponse';

export interface TicketsClient extends grpc.Client {
  AgregatedScores(argument: _ticketsPackage_DateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ticketsPackage_AgregatedResponses__Output>): grpc.ClientUnaryCall;
  AgregatedScores(argument: _ticketsPackage_DateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ticketsPackage_AgregatedResponses__Output>): grpc.ClientUnaryCall;
  AgregatedScores(argument: _ticketsPackage_DateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ticketsPackage_AgregatedResponses__Output>): grpc.ClientUnaryCall;
  AgregatedScores(argument: _ticketsPackage_DateRequest, callback: grpc.requestCallback<_ticketsPackage_AgregatedResponses__Output>): grpc.ClientUnaryCall;
  agregatedScores(argument: _ticketsPackage_DateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ticketsPackage_AgregatedResponses__Output>): grpc.ClientUnaryCall;
  agregatedScores(argument: _ticketsPackage_DateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ticketsPackage_AgregatedResponses__Output>): grpc.ClientUnaryCall;
  agregatedScores(argument: _ticketsPackage_DateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ticketsPackage_AgregatedResponses__Output>): grpc.ClientUnaryCall;
  agregatedScores(argument: _ticketsPackage_DateRequest, callback: grpc.requestCallback<_ticketsPackage_AgregatedResponses__Output>): grpc.ClientUnaryCall;
  
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
  AgregatedScores: grpc.handleUnaryCall<_ticketsPackage_DateRequest__Output, _ticketsPackage_AgregatedResponses>;
  
  PingPong: grpc.handleUnaryCall<_ticketsPackage_PingRequest__Output, _ticketsPackage_PingResponse>;
  
}

export interface TicketsDefinition extends grpc.ServiceDefinition {
  AgregatedScores: MethodDefinition<_ticketsPackage_DateRequest, _ticketsPackage_AgregatedResponses, _ticketsPackage_DateRequest__Output, _ticketsPackage_AgregatedResponses__Output>
  PingPong: MethodDefinition<_ticketsPackage_PingRequest, _ticketsPackage_PingResponse, _ticketsPackage_PingRequest__Output, _ticketsPackage_PingResponse__Output>
}
