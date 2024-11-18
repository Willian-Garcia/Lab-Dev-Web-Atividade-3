import { Router } from "express";
import expense from "./expense";

const router = Router();

router.use("/despesa", expense);

export default router;