const { screenShot } = require("../specs/utils/screenShot");

function openURL(variable, url) {
  browser.maximizeWindow();
  browser.url(url);

  screenShot();
  const { americaHeaderName, americaFlag } = variable;
  const getVerificationTitle = $(americaHeaderName).getText();
  console.log("name of country:", getVerificationTitle);

  //select meddle flag which is America
  if (getVerificationTitle === americaHeaderName) {
    $(americaFlag).click();
    return true;
  } else {
    $(americaFlag).click();
  }
  screenShot();
  //browser.pause(5000);
}
module.exports = { openURL };
