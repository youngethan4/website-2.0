import { appendFile } from "fs";

const saveMessage = (req, res) => {
  const { name, email, message } = req.body;
  appendFile(
    `./messages/${name}`,
    `Name: ${name}, Email: ${email}, Message: ${message}\n`,
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send();
      } else {
        console.log("File created.");
        res.status(200).send();
      }
    }
  );
};

export default {
  saveMessage,
};
