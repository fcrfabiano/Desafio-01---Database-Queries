import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class FindAllUsersOrderedByFirstNameUseCase {
    constructor (
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(): Promise<User[]> {
        return await this.usersRepository.findAllUsersOrderedByFirstName();
    }
}

export { FindAllUsersOrderedByFirstNameUseCase }