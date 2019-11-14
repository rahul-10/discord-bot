const { db } = require('../configs/db');

exports.insertQuery = (obj) => db('queries').insert(obj, ['*']);

exports.fetchQueriesByUserId = (user_id, query) => {
  const patt = `%${query}%`;
  const q = db('queries').where({ user_id }).andWhere('query', 'like', patt).orderBy('updated_at', 'desc');
  return q.select(['*']);
} 