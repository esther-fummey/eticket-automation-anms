const { Builder, By, until } = require('selenium-webdriver');

(async function navbarTest() {

  const eticket = await new Builder().forBrowser('chrome').build();
  eticket.manage().window().maximize()

  try {
    await eticket.get('http://159.8.238.90:7047/home'); // replace with your URL

    // clicking on the menus
    //click on category
    const category =await eticket.findElement(By.xpath("/html/body/app-root/app-home-layout/main/div[1]/app-menubar/main/div/div/div[2]/nav/ul/li[1]"))
    category.click()

    console.log("✅ Clicked on Category");

    // Wait for 10 seconds (or use a smarter wait below)
    await eticket.sleep(10000); // Wait 3 seconds before moving on


    //click on Venues
    const venues = await eticket.findElement(By.xpath("/html/body/app-root/app-home-layout/main/div[1]/app-menubar/main/div/div/div[2]/nav/ul/li[2]"),1000)
    venues.click()
    console.log("✅ Clicked on Venues");

    // Wait for 10 seconds (or use a smarter wait below)
    await eticket.sleep(10000); // Wait 3 seconds before moving on

    //notification
    await eticket.findElement(By.xpath("/html/body/app-root/app-home-layout/main/div[1]/app-menubar/main/div/div/div[2]/div/div[1]")).click()
    console.log("✅ Clicked on notification");

    // Wait for 15 seconds (or use a smarter wait below)
    await eticket.sleep(15000); // Wait 3 seconds before moving on

    //click on the outside
    await eticket.findElement(By.xpath("/html/body/app-root/app-home-layout/main/div[2]/div[1]/div/div[2]")).click()
    //profile
    await eticket.findElement(By.xpath("/html/body/app-root/app-home-layout/main/div[1]/app-menubar/main/div/div/div[2]/div/div[2]/img")).click()
    console.log("✅ Clicked on profile");

    // Wait for 15 seconds (or use a smarter wait below)
    await eticket.sleep(1000); // Wait 3 seconds before moving on

  } catch (err) {
    console.log('❌ Login test failed:', err.message);
  } finally {
    // await driver.quit();
  }
})();
