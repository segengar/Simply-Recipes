const sqlite3 = require('sqlite3');
const path = require('path');
// שמור את מסד הנתונים ישירות בתיקיית server
const db = new sqlite3.Database(path.join(__dirname, "user.db"));

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )`);
});
module.exports = db;
