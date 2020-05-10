const { Builder, By, Key } = require('selenium-webdriver') 

async function automatization() {
  let driver =  await new Builder().forBrowser('chrome').build()
  
  for(let i = 0; i < 5; i++) {
    await driver.get("http://google.com")
    await driver.findElement(By.name("q")).sendKeys(`React JS ${i}`, Key.ENTER)
  }
}

automatization()