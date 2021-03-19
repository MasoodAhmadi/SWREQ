const { screenShot } = require("../specs/utils/screenShot");

function searchProduct(variable) {
  const { productButton, cellPhoneElement, atElement } = variable;

  $(productButton).click();
  $(cellPhoneElement).click();
  $(atElement).click();

  const { searchInput, searchButon, phoneElement } = variable;

  $(searchInput).click();
  $(searchInput).addValue("iphone");
  screenShot();

  $(searchButon).click();
  $(phoneElement).click();
  browser.pause(4000);

  const { phoneElementText, continueButton, addCard } = variable;

  $(phoneElementText).click();
  browser.pause(3000);

  $(continueButton).click();
  screenShot();
  browser.pause(7000);

  $(addCard).click();
  screenShot();
  browser.pause(2000);

  const { createNewAccount, createNewAccountContinue } = variable;

  $(createNewAccount).click();
  $(createNewAccountContinue).click();
  const { buttonNoOption, scheduleAppointment, acceptDate } = variable;

  $(buttonNoOption).click();
  screenShot();
  $(scheduleAppointment).click();
  browser.pause(6000);
  $(acceptDate).click();

  const { fieldInput, fieldInputLastName, fieldInputAddress } = variable;

  $(fieldInput).click();
  $(fieldInput).clearValue();
  $(fieldInput).addValue("Masood");
  screenShot();

  $(fieldInputLastName).click();
  $(fieldInputLastName).clearValue();
  $(fieldInputLastName).addValue("Ahmadi");
  screenShot();

  $(fieldInputAddress).click();
  $(fieldInputAddress).clearValue();
  $(fieldInputAddress).addValue("masoodahmadi553@gmail.com");
  screenShot();
  const { fieldInputPhoneNumber, fieldInputDescription } = variable;
  $(fieldInputPhoneNumber).click();
  $(fieldInputPhoneNumber).clearValue();
  $(fieldInputPhoneNumber).addValue("4056565565");
  screenShot();

  $(fieldInputDescription).click();
  $(fieldInputDescription).clearValue();
  $(fieldInputDescription).addValue("New number not allowed");

  const { appointmentButton } = variable;
  $(appointmentButton).click();
  screenShot();
}
module.exports = { searchProduct };
