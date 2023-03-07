import express, { json } from "express";
import cors from "cors";
import itemRouter from "./routers/item.router";
import categoryRouter from "./routers/category.router";

const app = express();
app.use(cors());
app.use(json());
app.use("/items", itemRouter);
app.use("/categories", categoryRouter);

export default app;
