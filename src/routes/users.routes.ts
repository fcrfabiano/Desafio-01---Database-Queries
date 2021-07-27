import { Router } from "express";

import { FindAllUsersController } from "../modules/users/useCases/findAllUsers/FindAllUsersController";
import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { FindUserByFullNameController } from "../modules/users/useCases/findUserByFullName/FindUserByFullNameController";

const userRoutes = Router();

const findAllUsersController = new FindAllUsersController();
const createUserController = new CreateUserController();
const findUserByFullNameController = new FindUserByFullNameController();

userRoutes.get("/", findAllUsersController.handle);
userRoutes.post("/", createUserController.handle);
userRoutes.get("/find/:first_name/:last_name", findUserByFullNameController.handle);

export { userRoutes }