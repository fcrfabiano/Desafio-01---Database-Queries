import { injectable, inject } from "tsyringe";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class CountAllGamesUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository
    ) {}

    async execute(): Promise<[{
        count: string
    }]> {
        return await this.gamesRepository.countAllGames();
    }
}

export { CountAllGamesUseCase }