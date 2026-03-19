const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes/api");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(express.json());

//rutas
app.use("/api", apiRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
}); 