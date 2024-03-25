module.exports = async (err, req, res, next) => {
  console.log(err);
  res.send({
    errors: [
      {
        message: err.message,
      },
    ],
  });
};
