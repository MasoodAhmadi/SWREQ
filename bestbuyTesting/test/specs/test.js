const { screenShot } = require("../specs/utils/screenShot");

function openURL(variable, url) {
  browser.maximizeWindow();
  browser.url(url);
  //const plc = $("United States");
  //const flqHeader = $("/html/body/div[2]/div/div/div/div[1]/div[2]/a[2]/h4");
  // = $("//a[2]/img");

  //console.log("america flaq", americaFlag);
  screenShot();
  const { americaHeaderName, americaFlag } = variable;
  const getVerificationTitle = $(americaHeaderName).getText();
  console.log("name of country:", getVerificationTitle);

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
