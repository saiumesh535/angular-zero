import { Router } from 'express';
import { wrapper } from '../../utils/errorHandler';
import { login } from './login';
import { signUp } from './signup';

const router: Router = Router();

router.post('/login', wrapper(login));
router.post('/signup', wrapper(signUp));

export const autController: Router = router;