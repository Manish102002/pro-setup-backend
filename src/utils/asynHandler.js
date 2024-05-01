const asynHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler).catch((err) => {
      next(err);
    });
  };
};

export { asynHandler };
