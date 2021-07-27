import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({
        first_name,
        last_name,
        email
    }: ICreateUserDTO): Promise<User> {
        const user = await this.usersRepository.create({
            first_name,
            last_name,
            email
        });

        return user;
    }

}

export { CreateUserUseCase }