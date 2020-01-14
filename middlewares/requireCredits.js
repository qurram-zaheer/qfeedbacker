module.exports = (req, res, next) => {
  const recNo = req.body.recipients.split(",").length;
  if (req.user.credits < recNo) {
    return res.status(403).send("Error: Not enough credits!");
  }
  next();
};
