import sqlite3 from 'sqlite3'

const db = new sqlite3.Database('test.db', () => {
    console.log('Connected to SQLite database')
})

db.run(` CREATE TABLE if not exists USER (ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NAME TEXT NOT NULL)`)

db.run(`INSERT INTO USER (NAME) VALUES ('bob')`)