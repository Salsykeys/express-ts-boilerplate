import { Router } from "express";
import { registerSchema, loginSchema } from "../validators/authValidator";
import verifyToken from "../middlewares/authToken";
import validate from "../middlewares/validate";

import { register, login } from "../controllers/authController";

const router: Router = Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);

export default router;