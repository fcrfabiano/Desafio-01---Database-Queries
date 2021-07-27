import { container } from "tsyringe";
import { Request, Response } from "express";
import {FindUsersByGameIdUseCase} from "./FindUsersByGameIdUseCase";

class FindUsersByGameIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const findUsersByGameIdUseCase = container.resolve(FindUsersByGameIdUseCase);

        const users = await findUsersByGameIdUseCase.execute(id);

        return response.status(201).json(users);
    }
}

export { FindUsersByGameIdController }