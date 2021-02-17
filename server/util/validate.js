const validate = (app) => {
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
};
