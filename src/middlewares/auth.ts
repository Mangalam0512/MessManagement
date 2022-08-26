import express from "express";

export const Auth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    // we will do something in future
    req.body.user = "Ayush";
    next();
};