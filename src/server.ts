import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/tickets';
import { TicketsHandlers } from '../proto/ticketsPackage/Tickets';
import { AgregatedResponses } from '../proto/ticketsPackage/AgregatedResponses';
import {initDbConn, getAgregatedResults} from './db/database'

const PORT = 8082;

const PROTO_FILE = '../proto/tickets.proto';

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));

const grpcObject = grpc.loadPackageDefinition(
	packageDef
) as unknown as ProtoGrpcType;

const ticketPackage = grpcObject.ticketsPackage;


function main() {
    initDbConn();
	const server = getServer();

	server.bindAsync(
		`0.0.0.0:${PORT}`,
		grpc.ServerCredentials.createInsecure(),
		(err, port) => {
			if (err) {
				console.log('ERROR ->', err);
				return;
			}
			console.log(`Your server started on port ${port}`);
			server.start();
		}
	);
}

const resultsArray: AgregatedResponses = {results:[]}

function getServer() {
	const server = new grpc.Server();
	server.addService(ticketPackage.Tickets.service, {
		PingPong: (req, res) => {
			console.log('GetServer', req.request);
            res(null, {message:'PONG'})
		},
        AgregatedScores: async (req, res) => {

            const {start = 0, end = 0} = req.request;
            console.log('PARAMS ->', {start, end})
            const rows = await getAgregatedResults(start, end);

            console.log('ROWS ->', rows)
            res(null, {results: resultsArray.results})
        }
	} as TicketsHandlers);

	return server;
}

main();
