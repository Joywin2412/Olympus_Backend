const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRouters = require("./routes/routes1");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();
connectDB();

const app = express();
var cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/api/users", userRouters);
// app.use(notFound);
// app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(5000, console.log(`Port is running on ${port}`.yellow.bold));
