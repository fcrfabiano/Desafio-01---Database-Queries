import { inject, injectable } from "tsyringe";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../../repositories/IGamesRepository";

@injectable()
class FindByTitleContainingUseCase {
    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository
    ) {}

    async execute(title: string): Promise<Game[] | undefined>{
        return await this.gamesRepository.findByTitleContaining(title);
    }
}

export { FindByTitleContainingUseCase }