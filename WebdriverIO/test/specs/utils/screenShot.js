let index = 1;

function screenShot() {
  browser.saveScreenshot(`./test/specs/Images/screen${index}.png`);
  index++;
}

module.exports = { screenShot };
