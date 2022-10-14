const express = require("express");
const { PORT } = require("./config/env");
const { dbInit } = require(`./config/Db`);
const routes = require("./routes.js");
//const cookieParser = require("cookie-parser");
//const { auth } = require("./middlewares/authMiddleware");
//const { errorHandler } = require("./middlewares/errorHandlerMiddleware");

const app = express();

// app.engine(
//   "hbs",
//   hbs.engine({
//     extname: "hbs",
//   })
// );
//app.set("view engine", "hbs");
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use("/static", express.static("public"));

// app.use(cookieParser());
//app.use(auth);
app.use(routes);
// app.use(errorHandler);

dbInit().then(() =>
  app.listen(PORT, () => console.log(`App is listnening on Port ${PORT}...`))
);
