import { writeFile, readFile } from 'node:fs/promises';

export default class HeroRepository {
  constructor({ file }) {
    this.file = file;
  }

  async #currentFileContent() {
    return JSON.parse(await readFile(this.file));
  }

  find() {
    return this.#currentFileContent();
  }

  async findById(heroId) {
    const currentFile = await this.#currentFileContent();
    return currentFile.find((hero) => hero.id === heroId);
  }

  async create(data) {
    const currentFile = await this.#currentFileContent();
    currentFile.push(data);

    await writeFile(this.file, JSON.stringify(currentFile));

    return data.id;
  }

  async update(heroId, item) {
    const currentFile = await this.#currentFileContent();
    const heroIndex = currentFile.findIndex((hero) => hero.id === heroId);

    Object.entries(item).forEach(([key, value]) => {
      currentFile[heroIndex][key] = value;
    });

    await writeFile(this.file, JSON.stringify(currentFile));

    return currentFile[heroIndex];
  }
}
