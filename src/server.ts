import fastify from 'fastify';
import { z } from 'zod';

const app = fastify();

app.get('/links', (request) => {
  const { code, url } = z
    .object({
      code: z.string().min(3),
      url: z.string().url(),
    })
    .parse(request.body);

  return 'Hello word';
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running!');
  });
