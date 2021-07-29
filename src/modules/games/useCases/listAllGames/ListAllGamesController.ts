import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListAllGamesUseCase } from "./ListAllGamesUseCase";

class ListAllGamesController {
    async handle(request: Request, response: Response): Promise<Response> {

        const listAllGamesUseCase = container.resolve(ListAllGamesUseCase);

        const gamesList = await listAllGamesUseCase.execute();

        return response.status(201).json(gamesList);
    }
}

export { ListAllGamesController }