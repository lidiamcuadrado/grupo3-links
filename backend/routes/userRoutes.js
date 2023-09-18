import express from "express";
import createUser from "../controllers/users/createUser";

const router = express.Router()

// Registro
router.post('/users/register', createUser);

export default router