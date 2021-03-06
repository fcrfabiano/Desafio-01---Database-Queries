import express, { Request, Response, NextFunction } from "express";

import "reflect-metadata";
import "express-async-errors";
import "./database";
import "./shared/container";
import { AppError } from "./errors";

import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }

    return response.status(500).json({
        message: `Internal Server Error - ${err.message}`,
    });
});

app.listen(3333, () => console.log("Server is running!"));