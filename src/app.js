//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root'; -------por si marca error en la conexion
//guardar archivo con cada cambio
//Inicializacion npm run dev
//LA NUBE PROPORCIONA LOS VALORES DEL .env
import express from "express";
import librosR from "./routes/libros.routes.js"; 
import indexR from "./routes/index.routes.js"; 
import usuariosR from "./routes/usuarios.routes.js";

const app = express();

app.use(express.json());

app.use("/", indexR);
app.use("/api", librosR);//activa rutas
app.use("/api", usuariosR);

app.use((req, res, next) => {
    res.status(404).json({
        message: "No se Encuentra la pagina"});
});

export default app;