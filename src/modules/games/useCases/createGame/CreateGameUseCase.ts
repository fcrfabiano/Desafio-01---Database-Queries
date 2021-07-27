import { inject, injectable } from "tsyringe";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class CreateGameUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository
    ) {}

    async execute(title: string): Promise<Game> {
        const game = await this.gamesRepository.create(title);

        return game;
    }
}

export { CreateGameUseCase }