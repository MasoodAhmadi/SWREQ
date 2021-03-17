function openURL(url) {
  browser.maximizeWindow();
  browser.url(url);
  const plc = $("United States");
  const flqHeader = $("/html/body/div[2]/div/div/div/div[1]/div[2]/a[2]/h4");
  const americaFlag = $("//a[2]/img");
  console.log("america flaq", americaFlag);

  //const { americaHeaderName, americaFlag } = variable;
  const getVerificationTitle = $(flqHeader).getText();
  console.log("name of country:", getVerificationTitle);
  if (getVerificationTitle === flqHeader) {
    $(americaFlag).click();
    return true;
  } else {
    $(americaFlag).click();
  }
  //browser.pause(5000);
}
module.exports = { openURL };
