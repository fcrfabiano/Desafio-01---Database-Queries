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

  async findByTitleContaining(param: string): Promise<void> {
    const user = await this.repository.find({
      where: {
        usersId: param
      },
      relations: ["user"]
    });
      // Complete usando query builder
  }

  async countAllGames(): Promise<[{ count: string }]> {
    return this.repository.query(" SELECT COUNT(id) FROM games"); // Complete usando raw query
  }

  async findUsersByGameId(id: string): Promise<User[] | Game[]> {
    const users = await this.repository
    .createQueryBuilder("game")
    .leftJoinAndSelect("game.users", "user")
    .where('user.id = :id', { id })
    .getMany();
    
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
}
