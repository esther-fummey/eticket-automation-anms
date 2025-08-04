const { Builder, By, until } = require('selenium-webdriver');

(async function navbarTest() {

  const eticket = await new Builder().forBrowser('chrome').build();
  eticket.manage().window().maximize()

  try {
    await eticket.get('http://159.8.238.90:7047/home'); // replace with your URL
    await eticket.sleep(5000)

    // Locate Top Picks In 
    const toppicks = await eticket.findElement(By.xpath("(//div[@class='title'])[1]"));

    // Scroll to Top Picks
    await eticket.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", toppicks);

    console.log("🖱️ Scrolled to the target element successfully!");

    //top picks
    //this week
    await eticket.wait(until.elementLocated(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/div[1]/app-home/main/div/div[2]/div/div[1]/app-selectable-list/section/div/div/div[2]"))).click()
    console.log("this week is clicked")
    await eticket.sleep(2000)
 
      // Try to find the alert/message on the page
    const alerts = await eticket.findElements(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/app-toast/main/div[2]/p[1]"));


    if (alerts.length > 0) {
      const messageText = await alerts[0].getText();
      console.log("📢 Alert Message Found: ", messageText);
    } else {
      console.log("ℹ️ No 'no events this week' message found.");
    }
     await eticket.sleep(2000)

// this month
await eticket.wait(until.elementLocated(By.xpath("//div[@class='title' and normalize-space(text())='This Month']"))).click()
    console.log("this month is clicked")
    // await eticket.sleep(2000)
 
      // Try to find the alert/message on the page
    const alertsmonth = await eticket.findElements(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/app-toast/main/div[2]/p[1]"));


    if (alertsmonth.length > 0) {
      const messageText = await alertsmonth[0].getText();
      console.log("📢 Alert Message Found: ", messageText);
    } else {
      console.log("ℹ️ No 'no events this month' message found.");
    }

  

    

    



} catch (err) {
    console.log('❌ homepage test failed:', err.message);
  } finally {
    // await driver.quit();
  }
})();
