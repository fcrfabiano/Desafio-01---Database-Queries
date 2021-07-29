import { container } from "tsyringe";
import { Request, Response } from "express";
import { FindByTitleContainingUseCase } from "./FindByTitleContainingUseCase";

class FindByTitleContainingController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title } = request.body;

        const findByTitleContainingUseCase = container.resolve(FindByTitleContainingUseCase);

        const game = await findByTitleContainingUseCase.execute(title);

        return response.json(game);
    }
}

export { FindByTitleContainingController }

