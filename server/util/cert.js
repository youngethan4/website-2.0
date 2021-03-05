import { readFileSync } from "fs";
import { env } from "process";

let privateKey, certificate, ca;

if (env.NODE_ENV === "production") {
  privateKey = readFileSync(
    "/etc/letsencrypt/live/ethanryoung.com-0001/privkey.pem",
    "utf8"
  );
  certificate = readFileSync(
    "/etc/letsencrypt/live/ethanryoung.com-0001/fullchain.pem",
    "utf8"
  );
  ca = readFileSync(
    "/etc/letsencrypt/live/ethanryoung.com-0001/chain.pem",
    "utf8"
  );
}

const credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};

export default credentials;
