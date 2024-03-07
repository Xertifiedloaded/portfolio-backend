import express from "express";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import userRouter from "./src/router/user.router.js";

const app = express();
app.use(morgan("dev"));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());

const limiter = rateLimit({
  windowMs: 10 * 1000,
  max: 20,
  message: "Too many requests from this IP, please try again later.",
  keyGenerator: function (req, res) {
    return req.headers.authorization || req.ip;
  },
});
app.use("/api/v1/*", limiter);
app.use("/", userRouter);
app.use("/api/v1", userRouter);


export default app;