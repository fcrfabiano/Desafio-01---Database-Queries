import { Router } from "express";

import { FindAllUsersController } from "../modules/users/useCases/findAllUsers/FindAllUsersController";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { FindUserByFullNameController } from "../modules/users/useCases/findUserByFullName/FindUserByFullNameController";
import { FindUserWithGamesByIdController } from "../modules/users/useCases/findUserWithGamesById/FindUserWithGamesByIdController";
import { FindAllUsersOrderedByFirstNameController } from "../modules/users/useCases/findAllUsersOrderedByFirstName/FindAllUsersOrderedByFirstNameController";

const userRoutes = Router();

const findAllUsersController = new FindAllUsersController();
const createUserController = new CreateUserController();
const findUserByFullNameController = new FindUserByFullNameController();
const findUserWithGamesByIdController = new FindUserWithGamesByIdController();
const findAllUsersOrderedByFirstNameController = new FindAllUsersOrderedByFirstNameController();

userRoutes.get("/", findAllUsersController.handle);
userRoutes.post("/", createUserController.handle);
userRoutes.get("/find/:first_name/:last_name", findUserByFullNameController.handle);
userRoutes.get("/id/:user_id", findUserWithGamesByIdController.handle);
userRoutes.get("/list", findAllUsersOrderedByFirstNameController.handle);

export { userRoutes }