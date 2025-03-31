import { Router } from "express";


const router = Router();

router.route("/register")
.post(userRegistrationValidator(), validate, registerUser);

export default router;