import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../entities/User";
import { IFindUserByFullNameDTO } from "../../dtos";
import { AppError } from "../../../../errors";

@injectable()
class FindUserByFullNameUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ first_name, last_name }: IFindUserByFullNameDTO): Promise<User | undefined> {
        const findUser = await this.usersRepository.findUserByFullName({ 
            first_name,
            last_name
        });

        if (!findUser) {
            throw new AppError("User does not exists!");
        }

        return findUser;
    }
}

export { FindUserByFullNameUseCase }