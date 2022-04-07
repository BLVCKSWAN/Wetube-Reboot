import express from "express";

const PORT = 4000;

const app = express();

const routerLogger = (req, res) => {
  next();
};

const methodLogger = (req, res, next) => {
  next();
};

const home = (req, res) => {
  return res.send("Hello!");
};

app.get("/", methodLogger, routerLogger, home);

const handleListening = () =>
  console.log(`✅Server listening on port http://localhost:${PORT} 🚀`);

app.listen(4000, handleListening);
