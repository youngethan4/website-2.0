import express from "express";
import { join } from "path";
import cors from "cors";
import { createServer } from "http";
import { createServer as _createServer } from "https";
import router from "./routes/index.js";
//import validate from "./util/validate";
//import { credentials } from "./util/cert";

const app = express();
const httpPort = 3003;
//const httpsPort = 443;

app.use(cors());
app.use(express.json());
app.use(express.static(join("./", "build")));

//const httpsServer = _createServer(credentials, app);
const httpServer = createServer(app);
//validate(app);

router(app);

app.get("/*", (req, res) => {
  res.sendFile(join("./", "build", "index.html"));
});

httpServer.listen(httpPort, () => {
  console.log("HTTP on 80 is on.");
});
// httpsServer.listen(httpsPort, () => {
//   console.log("HTTPS on 443 is on.");
// });
