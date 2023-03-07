import * as knex from 'knex';

let db: knex.Knex;

export function initDbConn(): void {
	db = knex.knex({
		client: 'sqlite3',
		connection: {
			filename: './database.db',
		},
		useNullAsDefault: true,
	});
}

export async function getAgregatedResults(start: any, end: any): Promise<void> {
	return db.raw('SELECT * FROM rating_categories');
}

module.exports = { initDbConn, getAgregatedResults };
