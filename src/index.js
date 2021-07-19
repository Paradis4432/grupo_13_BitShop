const express = require("express");
const path = require("path");
const app = express();

// App Server
app.set("port",process.env.PORT || 3000);
app.listen(app.get("port"),() => console.log("Server Start http://localhost:" + app.get("port")));

// App Acces Public
app.use(express.static(path.resolve(__dirname, "../public")));

// App Settings
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"));

// App Middlewares


// App Routes
const home = require("./routes/home");
app.use(home);

const product = require("./routes/product");
app.use("/product", product);    

const user = require("./routes/user");
app.use("/user", user);

