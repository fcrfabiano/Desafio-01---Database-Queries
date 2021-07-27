import { Router } from "express";

import { userRoutes } from "./users.routes";
import { gamesRoutes } from "./games.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/games", gamesRoutes)

export { routes }