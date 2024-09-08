import express from "express";
const app = express();
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import expressLayouts from "express-ejs-layouts";

import path from "path";
import { fileURLToPath } from "url";

// Get the file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// Use express-ejs-layouts middleware
app.use(expressLayouts);

// Set EJS as the template engine
app.set("view engine", "ejs");

// Set the directory for views
app.set("views", path.join(__dirname, "./views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "./public")));

// serving static files
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Define routes (importing the routes from routes/index.js)
import appRoutes from "./routes/index.js";
app.use("/", appRoutes);

export default app;
