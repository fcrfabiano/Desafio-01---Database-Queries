import { getRepository, Repository } from 'typeorm';
import { AppError } from '../../../../errors';

import { IFindUserWithGamesDTO, IFindUserByFullNameDTO, ICreateUserDTO } from '../../dtos';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findUserWithGamesById({
    user_id,
  }: IFindUserWithGamesDTO): Promise<User> {
    const user = await this.repository.findOne(user_id);

    if(!user) {
      throw new Error("User does not exists!");
    }

    return user;
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    return await this.repository.query("SELECT * FROM users ORDER BY first_name"); // Complete usando raw query
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User | undefined> {
    return await this.repository.findOne({
      first_name,
      last_name
    });
  }

  async create({
    first_name,
    last_name,
    email}
    : ICreateUserDTO): Promise<User> {
      const user = await this.repository.create({
        first_name,
        last_name,
        email
      });

      const userEmailAlreadyExists = await this.repository.findOne({email});

      if (userEmailAlreadyExists) {
        throw new AppError("User Already exists!");
      }

      await this.repository.save(user);

      return user;
    };
}
