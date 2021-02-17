import { readFileSync } from "fs";

const privateKey = readFileSync(
  "/etc/letsencrypt/live/ethanryoung.com-0001/privkey.pem",
  "utf8"
);
const certificate = readFileSync(
  "/etc/letsencrypt/live/ethanryoung.com-0001/fullchain.pem",
  "utf8"
);
const ca = readFileSync(
  "/etc/letsencrypt/live/ethanryoung.com-0001/chain.pem",
  "utf8"
);
export default credentials = {
  key: privateKey,
  cert: certificate,
  ca: ca,
};
