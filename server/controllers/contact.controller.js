import { appendFileSync } from "fs";

const saveMessage = (req, res) => {
  const { name, email, message } = req.body;
  try {
    appendFileSync(
      `./messages/${name}`,
      `Name: ${name}, Email: ${email}, Message: ${message}\n`
    );
    console.log("File created.");
    res.status(200).send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
};

export default {
  saveMessage,
};
