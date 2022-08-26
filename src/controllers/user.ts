import express from "express";

export const NameController = (req: express.Request, res: express.Response) => {
    const name = req.params.name;
    res.status(200).json({ "message": `Name passed is ${name}` });
};