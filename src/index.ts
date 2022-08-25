import express from "express";
import cors from 'cors'
import indexRoutes from "./routes";

const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}))
app.use( cors())

// Routes
app.use(indexRoutes);

app.listen(3000, () => console.log("Server on port! ", 3000));
