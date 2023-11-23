import { Router } from "express";
import {getUsuarios, 
    createUsuarios, 
    getUsuario, 
    deleteUsuario, 
    updateUsuario
} from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/usuarios", getUsuarios);

router.post("/usuarios", createUsuarios);

router.get("/usuarios/:idUsuario", getUsuario);

router.delete("/usuarios/:idUsuario", deleteUsuario);

router.patch("/usuarios/:idUsuario", updateUsuario);


export default router;