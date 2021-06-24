const express = require("express");
const app = express();
const path = require("path");

app.listen(3000, () => console.log("Servidor 3000 corriendo", "http://localhost:3000"));

app.use(express.static(path.resolve(__dirname, "../public")));

app.use(require("./routes/web"))