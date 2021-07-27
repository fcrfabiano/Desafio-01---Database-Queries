import { Request, Response} from "express";
import { container } from "tsyringe";

import { FindUserByFullNameUseCase } from "./FindUserByFullNameUseCase";

class FindUserByFullNameController {
    async handle(request: Request, response: Response) {
        const { first_name, last_name } = request.params;

        const findUserByFullNameUseCase = container.resolve(FindUserByFullNameUseCase);

        const findUser = await findUserByFullNameUseCase.execute({
            first_name,
            last_name
        });

        return response.status(201).json(findUser);
    }
}

export { FindUserByFullNameController }