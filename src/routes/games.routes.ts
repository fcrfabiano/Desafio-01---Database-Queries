import { Router } from "express";

import { CreateGameController } from "../modules/games/useCases/createGame/CreateGameController";
import { CountAllGamesController } from "../modules/games/useCases/countAllGames/CountAllGamesController";
import { FindUsersByGameIdController } from "../modules/games/useCases/findUsersByGameId/FindUsersByGameIdController";
import { ListAllGamesController } from "../modules/games/useCases/listAllGames/ListAllGamesController";
import { FindByTitleContainingController } from "../modules/games/useCases/findByTitleContaining/FindByTitleContainingController";

const gamesRoutes = Router();

const createGameController = new CreateGameController();
const countAllGamesController = new CountAllGamesController();
const findUsersByGameIdController = new FindUsersByGameIdController();
const listAllGamesController = new ListAllGamesController();
const findByTitleContainingController = new FindByTitleContainingController();

gamesRoutes.post("/", createGameController.handle);
gamesRoutes.get("/list", countAllGamesController.handle);
gamesRoutes.get("/find/:id", findUsersByGameIdController.handle);
gamesRoutes.get("/list/all", listAllGamesController.handle);
gamesRoutes.post("/find", findByTitleContainingController.handle);

export { gamesRoutes }