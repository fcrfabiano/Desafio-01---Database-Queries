import { Router } from "express";

import { FindAllUsersController } from "../modules/users/useCases/findAllUsers/FindAllUsersController";

const routes = Router();

const findAllUsersController = new FindAllUsersController();

routes.use("/users", findAllUsersController.handle);

export { routes }