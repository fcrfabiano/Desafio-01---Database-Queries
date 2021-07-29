import { getRepository, Repository } from 'typeorm';
import { AppError } from '../../../../errors';

import { User } from '../../../users/entities/User';
import { Game } from '../../entities/Game';

import { IGamesRepository } from '../IGamesRepository';

export class GamesRepository implements IGamesRepository {
  private repository: Repository<Game>;

  constructor() {
    this.repository = getRepository(Game);
  }

  async findByTitleContaining(param: string): Promise<Game[] | undefined> {
    const games = await this.repository.query(`select * from games where title ilike '%${param}%'`);
      // Complete usando query builder

    return games;
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository.query(" SELECT COUNT(id) FROM games"); // Complete usando raw query
  }

  async findUsersByGameId(id: string): Promise<User[] | undefined> {
    const games = await this.repository
    .createQueryBuilder("game")
    .leftJoinAndSelect("game.users", "user")
    .where('game.id = :id', { id })
    .getMany();

    /* const games: Game[] = await this.repository.find({
      where: {
        id: id
      },
      relations: ["users"]

      const [{ users }] = games;
    }); */

    const [{ users }] = games

    return users;
  }

  async create(title: string): Promise<Game> {
    const game = this.repository.create({
      title
    });

    const gameExists = await this.repository.findOne({
      title
    });

    if(!title) {
      throw new AppError("Title cannot be empty!");
    }

    if(gameExists) {
      throw new AppError("Game already exists!");
    }

    await this.repository.save(game);

    return game;
  }

  async listAllGames(): Promise<Game[]> {
    return await this.repository.find();
  }
}
