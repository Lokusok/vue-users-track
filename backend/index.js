import process from 'node:process';

import Fastify from 'fastify';
import cors from '@fastify/cors';

import db from './db.js';
import { DELETE, POST, PUT } from './schemas.js';

const fastify = Fastify();
await fastify.register(cors, {});

fastify.get('/', async () => {
  return db;
});

fastify.get('/users', async (req) => {
  const perPage = 4;
  const maxPage = Math.ceil(db.users.length / perPage);

  const searchQuery = req.query.search?.toLowerCase();
  const page = req.query.page ?? 1;
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

  return {
    data: resultUsers,
    page,
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
    const user = {
      ...req.body,
      id: crypto.randomUUID(),
    };

    db.users.push(user);

    return user;
  },
);

fastify.put(
  '/users/:id',
  {
    schema: PUT.users,
  },
  async (req) => {
    let updatedUser = null;

    db.users = db.users.map((user) => {
      if (user.id === req.params.id) {
        updatedUser = req.body;
        return req.body;
      }
      return user;
    });

    return updatedUser;
  },
);

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
