import { Request, Response } from 'express';
import { usersModel } from '../../models';

export const login = async (req: Request, res: Response) => {
    const { username } = req.body;
    const userData = await usersModel.find({ username });
    if (userData.length === 0) return res.status(403).send('username is wrong');
    res.json({ userData });
}