import express from "express";

export const OutputStartTime = (req: express.Request, res: express.Response) => {
    const time = Date.now();
    res.status(200).json({ "message": `Server started at ${time}` });
};