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

app.use(expressLayouts);
app.use(express.static(path.join(__dirname, "public")));

// setting up view engine

app.set("view engine", "ejs");
app.set("views", "./views");

// serving static files
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

export default app;
