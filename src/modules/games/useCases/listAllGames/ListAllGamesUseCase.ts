import { inject, injectable } from "tsyringe";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class ListAllGamesUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository
    ) {}

    async execute(): Promise<Game[]> {
        const usersList = await this.gamesRepository.listAllGames();

        return usersList;
    }

}

export { ListAllGamesUseCase }