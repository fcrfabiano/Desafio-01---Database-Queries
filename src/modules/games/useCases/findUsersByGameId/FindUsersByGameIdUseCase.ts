import { inject, injectable } from "tsyringe";
import { User } from "../../../users/entities/User";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class FindUsersByGameIdUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository
    ) {}

    async execute(id: string): Promise<User[] | undefined> {
        return await this.gamesRepository.findUsersByGameId(id);
    }
}

export { FindUsersByGameIdUseCase }