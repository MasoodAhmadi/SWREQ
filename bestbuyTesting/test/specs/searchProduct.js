const { screenShot } = require("../specs/utils/screenShot");

function searchProduct(variable) {
  const { productButton, cellPhoneElement, atElement } = variable;
  // const productButton = $(
  //   '//*[@id="header-block"]/div[2]/div[2]/div/nav[1]/ul/li[1]/button'
  // );
  $(productButton).click();
  //browser.pause(3000);

  // const cellPhoneElement = $(
  //   '//*[@id="header-menu-167"]/li[3]/ul/li[5]/button'
  // );
  $(cellPhoneElement).click();
  //browser.pause(3000);
  //const atElement = $("#header-menu-65 > li:nth-child(3) > a");
  $(atElement).click();
  const { searchInput, searchButon, phoneElement } = variable;

  //const searchInput = $('//*[@id="gh-search-input"]');
  $(searchInput).click();
  $(searchInput).addValue("iphone");
  //browser.pause(2000);
  screenShot();

  // const searchButon = $(
  //   '//*[@id="header-block"]/div[2]/div[1]/div/div[2]/div/div[1]/div/div/form/button[2]'
  // );
  $(searchButon).click();

  // const phoneElement = $(
  //   '//*[@id="widget-c49b675f-f9aa-4d6b-9e6d-cca0fb66be41"]/div/div[2]/div[1]/div[2]/div/a'
  // );
  $(phoneElement).click();
  browser.pause(4000);

  const { phoneElementText, continueButton, addCard } = variable;

  // const phoneElementText = $(
  //   '//*[@id="site-control-content"]/div[4]/div/div[3]/div/div[1]/div[1]/div[2]/div[3]/div/div[2]/button'
  // );
  $(phoneElementText).click();
  browser.pause(3000);

  // const continueButton = $(
  //   "/html/body/main/div[1]/div[4]/div/div[3]/div/div[1]/div[1]/div[2]/div[3]/div/div[4]"
  // );
  $(continueButton).click();
  screenShot();

  browser.pause(7000);
  // const addCard = $(
  //   "/html/body/div[3]/main/div[2]/div[3]/div/div/div[3]/div[7]/div[1]/div/div/div/button"
  // );
  $(addCard).click();
  screenShot();

  browser.pause(2000);

  const { createNewAccount, createNewAccountContinue } = variable;
  // const createNewAccount = $(
  //   '//*[@id="transaction-types-container"]/div/div[1]/div[1]/div[3]/div[3]/div/div/button'
  // );
  $(createNewAccount).click();

  // const createNewAccountContinue = $(
  //   "/html/body/main/div/div[1]/div[1]/div[3]/div[3]/div[2]/button"
  // );
  $(createNewAccountContinue).click();

  const { buttonNoOption, scheduleAppointment, acceptDate } = variable;
  // const buttonNoOption = $(
  //   "/html/body/main/div/div[1]/div[1]/div[3]/div[2]/button[2]"
  // );
  $(buttonNoOption).click();
  screenShot();

  // const scheduleAppointment = $(
  //   "/html/body/main/div/div[1]/div[1]/div[3]/div[4]/div[2]/button"
  // );
  $(scheduleAppointment).click();
  browser.pause(6000);

  // const acceptDate = $(
  //   "/html/body/main/div[2]/div/div/div/ul/li[1]/div/div/div[2]/div[2]"
  // );
  $(acceptDate).click();

  const { fieldInput, fieldInputLastName, fieldInputAddress } = variable;
  // const fieldInput = $(
  //   "/html/body/main/div[2]/div/div/div/div/div[2]/form/div[1]/input"
  // );
  $(fieldInput).click();
  $(fieldInput).clearValue();
  $(fieldInput).addValue("Masood");
  screenShot();

  //const fieldInputLastName = $('//*[@id="lastName"]');
  $(fieldInputLastName).click();
  $(fieldInputLastName).clearValue();
  $(fieldInputLastName).addValue("Ahmadi");
  screenShot();

  // const fieldInputAddress = $('//*[@id="emailAddress"]');
  $(fieldInputAddress).click();
  $(fieldInputAddress).clearValue();
  $(fieldInputAddress).addValue("masoodahmadi553@gmail.com");
  screenShot();
  const { fieldInputPhoneNumber, fieldInputDescription } = variable;
  // const fieldInputPhoneNumber = $('//*[@id="phoneNumber"]');
  $(fieldInputPhoneNumber).click();
  $(fieldInputPhoneNumber).clearValue();
  $(fieldInputPhoneNumber).addValue("4056565565");
  screenShot();

  // const fieldInputDescription = $('//*[@id="description"]');
  $(fieldInputDescription).click();
  $(fieldInputDescription).clearValue();
  $(fieldInputDescription).addValue("New number not allowed");

  const { appointmentButton } = variable;
  // const appointmentButton = $(
  //   "/html/body/main/div[2]/div/div/div/div/div[2]/form/button"
  // );

  $(appointmentButton).click();
  screenShot();
}
module.exports = { searchProduct };
