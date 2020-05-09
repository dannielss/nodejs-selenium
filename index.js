const { Builder, By, Key, Util } = require('selenium-webdriver') 

async function automatization() {
  let driver =  await new Builder().forBrowser('chrome').build()
  await driver.get("http://google.com")
  await driver.findElement(By.name("q")).sendKeys("React Js", Key.ENTER)
}

automatization()