require("dotenv").config();
const { variable, openURL, loginUser, searchProduct } = require("./");
let {
  USER_NAME_DEMO: email,
  PASS_WORD_DEMO: password,
  BASE_URL_DEMO: BASE_URL,
} = process.env;
describe("should open Best buy website", () => {
  it("step 1: opening baseURL address", () => {
    openURL(variable, BASE_URL);
  });
  it("step 2: login to user and password", () => {
    loginUser(variable, email, password);
  });
  it("step 3: search product", () => {
    searchProduct(variable);
  });
});
