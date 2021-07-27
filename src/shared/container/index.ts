import { container } from "tsyringe";

import { IUsersRepository } from "../../modules/users/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/users/repositories/implementations/UsersRepository";

import { IGamesRepository } from "../../modules/games/repositories/IGamesRepository";
import { GamesRepository } from "../../modules/games/repositories/implementations/GamesRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository", 
    UsersRepository
);

container.registerSingleton<IGamesRepository>(
    "GamesRepository",
    GamesRepository
);