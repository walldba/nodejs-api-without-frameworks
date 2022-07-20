export default class HeroService {
  constructor({ heroRepository }) {
    this.heroRepository = heroRepository;
  }

  find() {
    return this.heroRepository.find();
  }

  findById(heroId) {
    return this.heroRepository.findById(heroId);
  }

  create(data) {
    return this.heroRepository.create(data);
  }

  update(heroId, item) {
    return this.heroRepository.update(heroId, item);
  }
}
