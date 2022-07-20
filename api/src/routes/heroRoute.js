import { once } from 'node:events';
import Hero from '../entities/hero.js';
import { DEFAULT_HEADER } from '../utils/headerUtil.js';
import { regexPathParam } from '../utils/regexUtil.js';

const heroRoutes = ({ heroService }) => ({
  '/heroes:get': async (request, response) => {
    const heroes = await heroService.find();

    response.write(
      JSON.stringify({
        results: heroes,
      })
    );
    return response.end();
  },

  '/heroes:post': async (request, response) => {
    const data = await once(request, 'data');
    const item = JSON.parse(data);
    const hero = new Hero(item);

    const id = await heroService.create(hero);

    response.writeHead(201, DEFAULT_HEADER);
    response.write(
      JSON.stringify({
        id,
        success: 'User created with success!!',
      })
    );

    return response.end();
  },

  '/heroes:put': async (request, response) => {
    const { url } = request;
    const [pathParam] = url.match(regexPathParam);
    const heroId = pathParam.replace('/', '');

    const data = await once(request, 'data');
    const item = JSON.parse(data);

    const hero = await heroService.update(heroId, item);

    response.write(
      JSON.stringify({
        hero,
        success: 'User updated with success!!',
      })
    );

    return response.end();
  },
});

export { heroRoutes };
