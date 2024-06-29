import Fastify from 'fastify';
import cors from '@fastify/cors';

import db from './db.js';
import { DELETE, POST, PUT } from './schemas.js';

const fastify = Fastify();
await fastify.register(cors, {});

fastify.get('/', async () => {
  return db;
});

const perPage = 4;
const maxPage = Math.ceil(db.users.length / perPage);

fastify.get('/users', async (req) => {
  const searchQuery = req.query.search?.toLowerCase();
  const page = req.query.page;
  let findUsers = db.users;

  if (searchQuery) {
    findUsers = db.users.filter((user) => {
      for (const key in user) {
        const value = user[key];
        if (typeof value === 'string') {
          const lowerCaseValue = value.toLowerCase();

          if (lowerCaseValue.includes(searchQuery)) return user;
        }
      }
    });
  }

  const startIndex = +page > 1 ? (page - 1) * perPage : 0;
  const endIndex = perPage * page || Infinity;
  const resultUsers = findUsers.slice(startIndex, endIndex);

  console.log(resultUsers);
  console.log({ page, perPage, startIndex, endIndex });

  return {
    data: resultUsers,
    perPage,
    maxPage,
  };
});

fastify.get('/users/:id', async (req) => {
  return db.users.find((user) => user.id === req.params.id);
});

fastify.post(
  '/users',
  {
    schema: POST.users,
  },
  async (req) => {
    db.users.push(req.body);
    return db.users;
  },
);

fastify.put(
  '/users/:id',
  {
    schema: PUT.users,
  },
  async (req) => {
    db.users = db.users.map((user) => (user.id === req.params.id ? req.body : user));
    return db.users;
  },
);

fastify.delete(
  '/users/:id',
  {
    schema: DELETE.users,
  },
  async (req) => {
    db.users = db.users.filter((user) => user.id !== req.params.id);
    return db.users;
  },
);

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
