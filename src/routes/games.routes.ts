import { Router } from "express";

import { CreateGameController } from "../modules/games/useCases/createGame/CreateGameController";
import { CountAllGamesController } from "../modules/games/useCases/countAllGames/CountAllGamesController";
import { FindUsersByGameIdController } from "../modules/games/useCases/findUsersByGameId/FindUsersByGameIdController";

const gamesRoutes = Router();

const createGameController = new CreateGameController();
const countAllGamesController = new CountAllGamesController();
const findUsersByGameIdController = new FindUsersByGameIdController();

gamesRoutes.post("/", createGameController.handle);
gamesRoutes.get("/list", countAllGamesController.handle);
gamesRoutes.get("/find/:id", findUsersByGameIdController.handle);

export { gamesRoutes }