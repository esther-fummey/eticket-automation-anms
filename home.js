const { Builder, By, until } = require('selenium-webdriver');

(async function navbarTest() {

  const eticket = await new Builder().forBrowser('chrome').build();
  eticket.manage().window().maximize()

  try {
    await eticket.get('http://159.8.238.90:7047/home'); // replace with your URL

    //top picks
    //this week
    await eticket.findElement(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/div[1]/app-home/main/div/div[2]/div/div[1]/div[2]")).click()
    await eticket.sleep(2000)

      // Try to find the alert/message on the page
    const alerts = await eticket.findElements(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/app-toast/main/div[2]/p[1]"));


    

    if (alerts.length > 0) {
      const messageText = await alerts[0].getText();
      console.log("📢 Alert Message Found: ", messageText);
    } else {
      console.log("ℹ️ No 'no events this week' message found.");
    }
    //this month
   // Wait and click on "This Month"
    const thisMonth = await eticket.wait(until.elementLocated(
      By.xpath("/html/body/app-root/app-home-layout/main/div[2]/div[1]/app-home/main/div/div[2]/div/div[1]/div[3]")
    ), 10000);

    await eticket.wait(until.elementIsVisible(thisMonth), 10000);
    await eticket.wait(until.elementIsEnabled(thisMonth), 10000);
    await thisMonth.click();

    console.log("✅ Clicked on 'This Month'");
    await eticket.sleep(15000)
    
    //click on View all Events
    await eticket.findElement(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/div[1]/app-home/main/div/div[2]/div/div[3]/app-secondary-button/main")).click()
    await eticket.sleep(15000)

    // Navigate back
await eticket.navigate().back();
console.log("↩️ Navigated back to previous page");
await eticket.sleep(1500)
    //click on "View all category"
    await eticket.findElement(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/div[1]/app-home/main/div/div[3]/div[1]/div/h3")).click()

    
    // Navigate back
await eticket.navigate().back();
console.log("↩️ Navigated back to previous page");
await eticket.sleep(1500)
} catch (err) {
    console.log('❌ homepage test failed:', err.message);
  } finally {
    // await driver.quit();
  }
})();
