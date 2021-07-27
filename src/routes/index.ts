import { Router } from "express";

const routes = Router();

routes.use("/users", (request, response) => {
    return response.json({
        message: "Hello world!"
    });
});

export { routes }