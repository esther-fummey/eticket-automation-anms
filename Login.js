const { Builder, By, until } = require('selenium-webdriver');

(async function basicLoginTest() {
  let username = "Ama"
  let password = "Test@1234"
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('http://your-app-url.com/login'); // replace with your URL

    // Fill form
    await driver.findElement(By.name('username')).sendKeys(username); 
    await driver.findElement(By.name('password')).sendKeys(password);
    await driver.findElement(By.id('loginButton')).click();

    // Wait for homepage
    await driver.wait(until.elementLocated(By.id('dashboard')), 10000);

    // Check if login was successful
    const text = await driver.findElement(By.id('dashboard')).getText();

    if (text.includes('Welcome')) {
      console.log('✅ Login test passed!');
    } else {
      console.log('❌ Login test failed: Unexpected homepage text');
    }

  } catch (err) {
    console.log('❌ Login test failed:', err.message);
  } finally {
    await driver.quit();
  }
})();
