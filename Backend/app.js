// import express from "express";
// import { dbConnection } from "./database/dbConnections.js";
// import { config } from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import fileUpload from "express-fileupload";
// import { errorMiddleware } from "./middlewares/error.js";
// import messageRouter from "./router/messageRouter.js";
// import userRouter from "./router/userRouter.js";
// import appointmentRouter from "./router/appointmentRouter.js";

// const app = express();
// config({ path: "./config.env" });

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL_ONE, process.env.FRONTEND_URL_TWO],
//     method: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );


// app.use(
//   cors({
//     origin: ['http://localhost:5173'],
//     method: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );


// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );
// app.use("/api/v1/message", messageRouter);
// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/appointment", appointmentRouter);

// dbConnection();

// app.use(errorMiddleware);
// export default app;





import express from "express";
import { dbConnection } from "./database/dbConnections.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";

const app = express();
config({ path: "./config.env" });

// ✅ Use only one cors middleware here

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL_ONE, process.env.FRONTEND_URL_TWO],
//     method: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );


app.use(
  cors({
    origin: ["https://fnrtend1.onrender.com", "https://new12-dashboard.onrender.com"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// ✅ All routers after middleware
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

dbConnection();

// ✅ Global error handler
app.use(errorMiddleware);

export default app;



