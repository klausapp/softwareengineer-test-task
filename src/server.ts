import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/tickets';
import { TicketsHandlers } from '../proto/ticketsPackage/Tickets';

const PORT = 8082;

const PROTO_FILE = '../proto/tickets.proto';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));

const grpcObject = grpc.loadPackageDefinition(
	packageDef
) as unknown as ProtoGrpcType;

const ticketPackage = grpcObject.ticketsPackage;

function main() {
	const server = getServer();

	server.bindAsync(
		`0.0.0.0:${PORT}`,
		grpc.ServerCredentials.createInsecure(),
		(err, port) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log(`Your server as started on port ${port}`);
			server.start();
		}
	);
}

function getServer() {
	const server = new grpc.Server();
	server.addService(ticketPackage.Tickets.service, {
		PingPong: (req, res) => {
			console.log('GetServer', req.request);
            res(null, {message:'PONG'})
		},
	} as TicketsHandlers);

	return server;
}

main();
