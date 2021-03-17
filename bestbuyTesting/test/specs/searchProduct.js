function searchProduct() {
  const prod = $(
    '//*[@id="header-block"]/div[2]/div[2]/div/nav[1]/ul/li[1]/button'
  );
  prod.click();
  browser.pause(3000);

  const takeEl = $('//*[@id="header-menu-167"]/li[3]/ul/li[5]/button');
  takeEl.click();
  browser.pause(3000);

  const clAT = $("#header-menu-65 > li:nth-child(3) > a");
  clAT.click();

  const searchInput = $('//*[@id="gh-search-input"]');
  searchInput.click();
  searchInput.addValue("iphone");
  browser.pause(2000);
  const searchButon = $(
    '//*[@id="header-block"]/div[2]/div[1]/div/div[2]/div/div[1]/div/div/form/button[2]'
  );
  searchButon.click();

  const phoneElement = $(
    '//*[@id="widget-c49b675f-f9aa-4d6b-9e6d-cca0fb66be41"]/div/div[2]/div[1]/div[2]/div/a'
  );
  phoneElement.click();
  browser.pause(3000);
  const phoneElementText = $(
    '//*[@id="site-control-content"]/div[4]/div/div[3]/div/div[1]/div[1]/div[2]/div[3]/div/div[2]/button'
  );
  phoneElementText.click();
  const continueButton = $(
    "/html/body/main/div[1]/div[4]/div/div[3]/div/div[1]/div[1]/div[2]/div[3]/div/div[4]/a"
  );
  continueButton.click();
  browser.pause(8000);

  const addCard = $(
    "/html/body/div[3]/main/div[2]/div[3]/div/div/div[3]/div[7]/div[1]/div/div/div/button"
  );
  addCard.click();

  browser.pause(3000);
  const createNewAccount = $(
    '//*[@id="transaction-types-container"]/div/div[1]/div[1]/div[3]/div[3]/div/div/button'
  );
  createNewAccount.click();

  const newAccountContinue = $(
    "/html/body/main/div/div[1]/div[1]/div[3]/div[3]/div[2]/button"
  );
  newAccountContinue.click();
  const buttonNo = $(
    "/html/body/main/div/div[1]/div[1]/div[3]/div[2]/button[2]"
  );
  buttonNo.click();

  const scheduleAppointment = $(
    "/html/body/main/div/div[1]/div[1]/div[3]/div[4]/div[2]/button"
  );
  scheduleAppointment.click();
  browser.pause(5000);

  const acceptDate = $(
    "/html/body/main/div[2]/div/div/div/ul/li[1]/div/div/div[2]/div[2]"
  );
  acceptDate.click();

  // const fieldInput = $('//*[@id="firstName"]');
  // fieldInput.click();
  // fieldInput.addValue("Masood");

  // const fieldInputLastName = $('//*[@id="lastName"]');
  // fieldInputLastName.click();
  // fieldInputLastName.addValue("Ahmadi");

  // const fieldInputAddress = $('//*[@id="emailAddress"]');
  // fieldInputAddress.click();
  // fieldInputAddress.addValue("masoodahmadi553@gmail.com");

  // const fieldInputPhoneNumber = $('//*[@id="phoneNumber"]');
  // fieldInputPhoneNumber.click();
  // fieldInputPhoneNumber.addValue("4056565565");

  // const fieldInputDescription = $('//*[@id="description"]');
  // fieldInputDescription.click();
  // fieldInputDescription.addValue("New number not allowed");

  // const appointmentButton = $(
  //   '//*[@id="triage-app"]/div[2]/div/div/div/div/div[2]/form/button'
  // );
  // appointmentButton.click();
}
module.exports = { searchProduct };
