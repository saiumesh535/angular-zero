import { Router } from "express";
import { wrapper } from "../../utils/errorHandler";
import { addCategory } from "./categories";

const router: Router = Router();

router.post('/addCategory', wrapper(addCategory));

export const adminController: Router = router;