import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindUserWithGamesByIdUseCase } from "./FindUserWithGamesByIdUseCase";

class FindUserWithGamesByIdController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { user_id } = request.params;

        const findUserWithGamesByIdUseCase = container.resolve(FindUserWithGamesByIdUseCase);

        const user = await findUserWithGamesByIdUseCase.execute({ user_id });

        return response.status(201).json(user);
    }
}

export { FindUserWithGamesByIdController }