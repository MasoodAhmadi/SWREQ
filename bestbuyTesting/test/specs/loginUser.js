function loginUser() {
  const closeButton = $(
    "//*[@id='widgets-view-email-modal-mount']/div/div/div[1]/div/div/div/div/button"
  );
  closeButton.click();
  browser.pause(7000);

  const AccountButton = $(
    "#header-block > div.header-large > div.fullbleed-wrapper > div > nav.utility-navigation > ul > li:nth-child(1) > button > div.BtnTxt"
  );
  AccountButton.click();
  browser.pause(3000);

  const signButton = $(
    "#account-menu-app > div > div.am-sign-in-container > div > div > a"
  );
  signButton.click();

  const userNameField = $('//*[@id="fld-e"]');
  userNameField.click();
  userNameField.addValue("masoodahmadi553@gmail.com ");

  const passField = $(
    "/html/body/div[1]/div/section/main/div[2]/div[1]/div/div/div/div/form/div[2]/div/div/input"
  );
  passField.click();
  passField.addValue("A123456789AA");
  browser.pause(5000);

  const saveButton = $(".btn-secondary");
  saveButton.click();
  browser.pause(7000);
}
module.exports = { loginUser };
5;
