// const environment = process.env.NODE_ENV || 'development';

const knex = require('knex');
const knexPostgis = require('knex-postgis');
const { types } = require('pg');
// const moment = require('moment');
const config = require('./knexfile');

// const TIMESTAMPTZ_OID = 1184;
// const TIMESTAMP_OID = 1114;
// const DATE = 1082;
const NUMERIC = 1700;

// const parseTimestamp = val => (val === null ? null : moment.utc(val).toISOString());

const parseNumeric = val => Number(val);

// types.setTypeParser(TIMESTAMPTZ_OID, parseTimestamp);
// types.setTypeParser(TIMESTAMP_OID, parseTimestamp);
types.setTypeParser(NUMERIC, parseNumeric);
// types.setTypeParser(DATE, 'text');

const db = knex(config);
const st = knexPostgis(db);

module.exports = {
  db,
  st,
};
