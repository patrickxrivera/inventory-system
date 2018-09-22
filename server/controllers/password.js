const generatePassword = require('password-generator');

const getPasswords = (req, res) => {
  const count = 5;

  const passwords = Array.from(Array(count).keys()).map((i) => generatePassword(12, false));
  console.log({ passwords });

  res.json(passwords);

  console.log(`Sent ${count} passwords`);
};

module.exports = {
  getPasswords
};
