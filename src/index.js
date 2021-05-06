const express = require("express");
const morgan = require("morgan");

const app = express();

// setting.
app.set("port", process.env.PORT || 3000);

// middlewares.
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use(require("./routes/task.routes"));

// static files

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
