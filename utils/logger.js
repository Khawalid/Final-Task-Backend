const logger = (req, res, next) => {
  console.log(`API hit: ${req.method} ${req.url}`);
  next();
};

module.exports = logger;
