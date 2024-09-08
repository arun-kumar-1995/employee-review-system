//imports
import db from "./config/db.config.js";
import app from "./app.js";

const { PORT: port = 8000 } = process.env;

// connect express app only if connected to db instance
db.once("open", function () {
  // Start the Express server
  const expressServer = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});

// use express router
import appRoute from "./routes/index.js";
import ErrorHandler from "./middlewares/ErrorHandler.middleware.js";
app.use("/", appRoute);

// page not found
app.all("*", (req, res, next) => {
  return res.render(pageNotFound, { tile: "Page not found" });
});

//error middleware
app.use(ErrorHandler);
