import { Router } from "express";
import { userProfileAndRepos } from "../controllers/profileAndRepos.Controller";

const router = Router();

router.post('/', userProfileAndRepos);

export default router;