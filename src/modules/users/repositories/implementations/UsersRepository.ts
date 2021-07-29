import { getConnection, getRepository, Repository } from 'typeorm';
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

    const user = await this.repository
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.games", "game")
    .where("user.id = :id", { id: user_id })
    .getOne();

    if(!user) {
      throw new Error("User does not exists!");
    }

    return user;
  }

  async findAllUsersOrderedByFirstName(): Promise<User[]> {
    const users = await this.repository.query("select * from users student order by first_name");

    console.log(users);

    return users;
  }

  async findUserByFullName({
    first_name,
    last_name,
  }: IFindUserByFullNameDTO): Promise<User | undefined> {
    /* return await this.repository.findOne({
      first_name,
      last_name
    }); */

    const user =  await this.repository
      .createQueryBuilder()
      .where("LOWER(first_name) = LOWER(:first_name) AND LOWER(last_name) = LOWER(:last_name)", { first_name, last_name })
      .getOne();

    return user;
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
