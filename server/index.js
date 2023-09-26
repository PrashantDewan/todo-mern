import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import Routes from "./routes/route.js";

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', Routes);


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

Connection(); 

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
