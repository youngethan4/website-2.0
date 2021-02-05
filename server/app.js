const express = require("express");
const path = require("path");
const cors = require("cors");
const http = require("http");
const https = require("https");
const app = express();
httpPort = 80;
httpsPort = 443;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

//Getting key and certificate
const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/ethanryoung.com-0001/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/ethanryoung.com-0001/fullchain.pem",
  "utf8"
);
const ca = fs.readFileSync(
  "/etc/letsencrypt/live/ethanryoung.com-0001/chain.pem",
  "utf8"
);
const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

const httpsServer = https.createServer(credentials, app);
const httpServer = http.createServer(app);

//Check for valid info
app.use(function (req, res, next) {
  if (req.protocol === "http") {
    res.redirect("https://" + req.headers.host + req.url);
  } else {
    if (
      typeof req === undefined ||
      typeof req.ip === undefined ||
      typeof req.path === undefined ||
      typeof req.hostname === undefined
    ) {
      req.pause();
      res.status = 400;
      res.end("Invalid request");
    }
    next();
  }
});

app.post("/api/message", (req, res) => {
  console.log(req.body);
  res.send("Got it.");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

httpServer.listen(httpPort, () => {
  console.log("HTTP on 80 is on.");
});
httpsServer.listen(httpsPort, () => {
  console.log("HTTPS on 443 is on.");
});
