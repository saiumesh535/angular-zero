import { Request, Response } from 'express';
import { usersModel } from '../../models';
import { checkPassword } from '../../utils/passwordHelper';

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const userData = await usersModel.find({ username }) as any;
    if (userData.length === 0) return res.status(403).send('username is wrong');
    const isPassValid = await checkPassword(password, userData[0].hashPassword);
    if (!isPassValid) return res.json({
        status: false,
        message: 'check username password'
    });
    res.json({ userData: userData[0] });
}