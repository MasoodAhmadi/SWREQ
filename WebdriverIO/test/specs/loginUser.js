const { screenShot } = require("../specs/utils/screenShot");

function loginUser(variable) {
  const { closeButton, AccountButton, signInButton } = variable;

  $(closeButton).click();
  browser.pause(7000);
  screenShot();

  $(AccountButton).click();
  browser.pause(3000);
  screenShot();

  const { userNameField, passField, saveButton } = variable;

  $(signInButton).click();
  $(userNameField).click();
  $(userNameField).addValue("masoodahmadi553@gmail.com ");

  $(passField).click();
  $(passField).addValue("A123456789AA");
  browser.pause(5000);
  screenShot();

  $(saveButton).click();
  browser.pause(7000);
  screenShot();
}
module.exports = { loginUser };
