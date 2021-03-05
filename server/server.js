import express from "express";
import { join } from "path";
import cors from "cors";
import { createServer } from "http";
import router from "./routes/index.js";
import { env } from "process";
import validate from "./util/validate.js";
import credentials from "./util/cert.js";
import { createServer as _createServer } from "https";

const app = express();
const httpPort = 80;
const httpsPort = 443;
app.use(cors());
app.use(express.json());
app.use(express.static(join("./", "build")));
const httpServer = createServer(app);
let httpsServer;

if (env.NODE_ENV === "production") {
  httpsServer = _createServer(credentials, app);
  validate(app);
}
app.use((req, res) => {
  res.sendFile(join("/", "build", "index.html"), { root: "./" });
});

router(app);

httpServer.listen(httpPort, () => {
  console.log("HTTP on 80 is on.");
});
if (env.NODE_ENV === "production") {
  httpsServer.listen(httpsPort, () => {
    console.log("HTTPS on 443 is on.");
  });
}
