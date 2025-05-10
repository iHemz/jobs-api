require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const path = require("node:path");

// EXTRA SECURITY PACKAGES
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const { rateLimit } = require("express-rate-limit");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const connectDB = require("./db/connect");

// routers
const authRouter = require("./routes/auth");
const jobsRouter = require("./routes/jobs");

// middleware
const {
  errorHandlerMiddleware,
  notFoundMiddleware,
  authMiddleWare,
} = require("./middleware");

app.set("trust proxy", 1);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authMiddleWare, jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
