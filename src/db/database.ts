import { Database, OPEN_READWRITE } from 'sqlite3';

let db = new Database('./database.db', OPEN_READWRITE, (err) => {
	if (err) {
		console.error('DB ERROR:', err);
	}
	console.log('Connected to db');
});

db.serialize(() => {
	db.each(`SELECT * FROM rating_categories`, (err, row) => {
		if (err) {
			console.error('DB READ ERROR:', err);
		}
		console.log('ROW DATA :', row.id + '\t' + row.name);
	});
});

db.close((err) => {
	if (err) {
		console.error(err.message);
	}
	console.log('Close the database connection.');
});
