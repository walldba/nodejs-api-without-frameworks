import { join, dirname } from 'node:path';

import { fileURLToPath, parse } from 'node:url';

import { heroRoutes } from './routes/heroRoute.js';
import { DEFAULT_HEADER } from './utils/headerUtil.js';

import { generateInstance } from './factories/heroFactory.js';

const currentDir = dirname(fileURLToPath(import.meta.url));
const filePath = join(currentDir, './../database', 'data.json');

const heroService = generateInstance({
  filePath,
});

const allRoutes = {
  ...heroRoutes({
    heroService,
  }),

  // 404 routes
  default: (request, response) => {
    response.writeHead(404, DEFAULT_HEADER);
    response.write('endpoint not found!');
    response.end();
  },
};

function handler(request, response) {
  let { url, method } = request;
  const urlSplit = url.split('/');

  if (urlSplit.length >= 3) {
    url = `/${urlSplit[1]}`;
  }

  const { pathname } = parse(url, true);

  const key = `${pathname}:${method.toLowerCase()}`;
  const chosen = allRoutes[key] || allRoutes.default;

  return Promise.resolve(chosen(request, response)).catch(
    handlerError(response)
  );
}

function handlerError(response) {
  return (error) => {
    console.log('Something bad has  happened**', error.stack);
    response.writeHead(500, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        error: 'internal server error!!',
      })
    );

    return response.end();
  };
}

export default handler;
