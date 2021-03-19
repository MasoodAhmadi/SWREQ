const { openURL } = require("./test/specs/test");
const { loginUser } = require("./test/specs/loginUser");
const { searchProduct } = require("./test/specs/searchProduct");
module.exports = {
  openURL,
  loginUser,
  searchProduct,
  variable: require("./config.json"),
};
