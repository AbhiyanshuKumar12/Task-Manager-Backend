import express from "express"
import taskRouter from "./routes/taskRoutes.js"
import authRouter from "./routes/authRoutes.js"

const app = express()


// Parse incoming JSON requests
app.use(express.json());

// Custom middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use("/tasks", taskRouter);
app.use("/auth",authRouter);




export default app;