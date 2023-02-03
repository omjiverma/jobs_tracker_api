const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "Some thing went wrong" });
};

module.exports = errorHandlerMiddleware