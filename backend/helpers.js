function generateError(msg, code = 500) {
  const error = new Error(msg);
  error.code = code;
  return error;
}

module.exports = {
  generateError,
};
