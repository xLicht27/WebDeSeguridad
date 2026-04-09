const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const apiRoutes = require("./routes/index");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());

//middlewares
const corsOptions = {
    origin: [process.env.FRONTEND_URL, 'https://web-de-seguridad.vercel.app/', /\.vercel\.app$/],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

//rutas
app.use("/api", apiRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
}); 